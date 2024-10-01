<?php

add_action( 'wp_ajax_nopriv_sort_projects_by_type', 'sort_projects_by_type' );
add_action( 'wp_ajax_sort_projects_by_type', 'sort_projects_by_type' );

function sort_projects_by_type() {
	$ajax_response = array();
	$ajax_response[ 'success' ] = 0;
	$ajax_response[ 'message' ] = '';

	$type = sanitize_text_field( $_REQUEST[ 'type' ] );

	$args = array(
		'post_type' => 'projects',
		'post_status' => 'publish',
		'posts_per_page' => 12,
		'paged' => 1,
	);

	if ( $type !== 'all' ) {
		$args[ 'tax_query' ] = array(
			array(
				'taxonomy' => 'type',
				'field' => 'slug',
				'terms' => $type,
			),
		);
	}

	$post_markup = '';

	$posts = Timber::get_posts( $args );

	if ( count( $posts ) > 0 ) {
		foreach ( $posts as $post ) {
			ob_start();
			Timber::render( 'partials/projects-item.twig', array( 'post' => $post ) );
			$post_markup .= ob_get_clean();
		}
	} else {
		$post_markup .= '<p class="projects-not-found">Projects not found.</p>';
	}

	$ajax_response[ 'success' ] = 1;
	$ajax_response[ 'post_markup' ] = $post_markup;

	// Виводимо JSON-відповідь
	echo json_encode( $ajax_response );
	wp_die();
}
