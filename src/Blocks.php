<?php

namespace App;

use Timber\Site;
use Timber\Timber;

class Blocks extends Site {
	public function __construct() {
		add_action( 'acf/init', array( $this, 'register_acf_blocks' ) );
		add_filter( 'block_categories_all', [ $this, 'custom_block_category' ] );

		parent::__construct();
	}

	/** Create custom block category */
	function custom_block_category( $categories ) {
		// Adding a new category.
		$new_category = array(
			'slug' => 'archizem',
			'title' => 'Archizem'
		);

		array_splice( $categories, 0, 0, array( $new_category ) );

		return $categories;
	}

	/** Registrations Blocks */
	public function register_acf_blocks() {
		acf_register_block_type( array(
			'name' => 'main-banner',
			'title' => 'Main Banner',
			'description' => 'Main Banner',
			'render_callback' => array( $this, 'render_main_banner' ),
			'enqueue_style' => get_template_directory_uri() . '/blocks/main-banner/main-banner.css',
			'category' => 'archizem',
			'mode' => 'edit',
			'icon' => 'layout',
		) );

		acf_register_block_type( array(
			'name' => 'about-block',
			'title' => 'About Block',
			'description' => 'About Block',
			'render_callback' => array( $this, 'render_about_block' ),
			'enqueue_style' => get_template_directory_uri() . '/blocks/about-block/about-block.css',
			'category' => 'archizem',
			'mode' => 'edit',
			'icon' => 'layout',
		) );
	}

	public function render_main_banner( $block, $content = '', $is_preview = false ) {
		$context = Timber::context();

		// Store block values.
		$context[ 'block' ] = $block;

		// Store field values.
		$context[ 'fields' ] = get_fields();

		// Store $is_preview value.
		$context[ 'is_preview' ] = $is_preview;

		// Render the block.
		Timber::render( 'blocks/main-banner/main-banner.twig', $context );
	}

	public function render_about_block( $block, $content = '', $is_preview = false ) {
		$context = Timber::context();

		// Store block values.
		$context[ 'block' ] = $block;

		// Store field values.
		$context[ 'fields' ] = get_fields();

		// Store $is_preview value.
		$context[ 'is_preview' ] = $is_preview;

		// Render the block.
		Timber::render( 'blocks/about-block/about-block.twig', $context );
	}

}