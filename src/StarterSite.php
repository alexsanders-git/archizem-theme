<?php

namespace App;

use Timber\PostQuery;
use Timber\Site;
use Timber\Timber;

/**
 * Class StarterSite
 */
class StarterSite extends Site {
	public function __construct() {
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'theme_enqueue_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );

		add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		add_filter( 'timber/twig/environment/options', [ $this, 'update_twig_environment_options' ] );

		parent::__construct();
	}

	public function theme_enqueue_scripts() {
		wp_enqueue_style( 'app-style', get_template_directory_uri() . '/assets/styles/css/app.css' );
		wp_enqueue_script( 'app-script', get_template_directory_uri() . '/assets/js/app.js' );
	}

	public function admin_enqueue_scripts() {
		wp_enqueue_style( 'admin-style', get_template_directory_uri() . '/assets/styles/css/admin.css' );
	}

	/**
	 * This is where you can register custom post types.
	 */
	public function register_post_types() {
		// Register the Projects custom post type
		$labels = array(
			'name' => __( 'Projects', 'archizem' ),
			'singular_name' => __( 'Project', 'archizem' ),
			'menu_name' => __( 'Projects', 'archizem' ),
			'name_admin_bar' => __( 'Project', 'archizem' ),
			'add_new' => __( 'Add New', 'archizem' ),
			'add_new_item' => __( 'Add New Project', 'archizem' ),
			'new_item' => __( 'New Project', 'archizem' ),
			'edit_item' => __( 'Edit Project', 'archizem' ),
			'view_item' => __( 'View Project', 'archizem' ),
			'all_items' => __( 'All Projects', 'archizem' ),
			'search_items' => __( 'Search Projects', 'archizem' ),
			'parent_item_colon' => __( 'Parent Projects :', 'archizem' ),
			'not_found' => __( 'No projects found.', 'archizem' ),
			'not_found_in_trash' => __( 'No projects found in Trash.', 'archizem' ),
		);

		$args = array(
			'labels' => $labels,
			'public' => true,
			'has_archive' => false,
			'rewrite' => array( 'slug' => 'projects' ),
			'supports' => array( 'title', 'editor', 'thumbnail' ),
			'menu_icon' => 'dashicons-analytics',
			'menu_position' => 5,
			'capability_type' => 'post',
		);

		register_post_type( 'projects', $args );
	}

	/**
	 * This is where you can register custom taxonomies.
	 */
	public function register_taxonomies() {
		// Labels for the custom taxonomy
		$labels = array(
			'name' => __( 'Types', 'archizem' ),
			'singular_name' => __( 'Type', 'archizem' ),
			'menu_name' => __( 'Types', 'archizem' ),
			'all_items' => __( 'All Types', 'archizem' ),
			'edit_item' => __( 'Edit Type', 'archizem' ),
			'view_item' => __( 'View Type', 'archizem' ),
			'update_item' => __( 'Update Type', 'archizem' ),
			'add_new_item' => __( 'Add New Type', 'archizem' ),
			'new_item_name' => __( 'New Type Name', 'archizem' ),
			'search_items' => __( 'Search Types', 'archizem' ),
			'not_found' => __( 'No types found', 'archizem' ),
		);

		// Arguments for the custom taxonomy
		$args = array(
			'labels' => $labels,
			'hierarchical' => true, // Set to true for a category-like taxonomy
			'public' => true,
			'show_admin_column' => true,
			'rewrite' => array( 'slug' => 'type' ),
		);

		// Register the taxonomy
		register_taxonomy( 'type', array( 'projects' ), $args );
	}

	/**
	 * This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		/** Add logo */
		$custom_logo_id = get_theme_mod( 'custom_logo' );
		$logo_url = wp_get_attachment_image_url( $custom_logo_id, 'full' );
		$context[ 'site_logo' ] = $logo_url;

		/** Project Type Taxonomy */
		$args = array(
			'post_type' => 'projects',
			'post_status' => 'publish',
			'posts_per_page' => -1,
			'orderby' => 'name',
			'order' => 'ASC',
			'taxonomy' => 'type',
		);

		$projects_type = get_categories( $args );

		$context[ 'projects_type' ] = $projects_type;

		/** Get Projects Posts */
		$query = [
			'post_type' => 'projects',
			'posts_per_page' => 12,
		];

		$context[ 'posts' ] = Timber::get_posts( $query );

		/** Other */
		$context[ 'foo' ] = 'bar';
		$context[ 'stuff' ] = 'I am a value set in your functions.php file';
		$context[ 'notes' ] = 'These values are available everytime you call Timber::context();';
		$context[ 'menu' ] = Timber::get_menu();
		$context[ 'site' ] = $this;

		return $context;
	}

	public function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support( 'menus' );
		add_theme_support( 'custom-logo' );
	}

	/**
	 * This would return 'foo bar!'.
	 *
	 * @param string $text being 'foo', then returned 'foo bar!'.
	 */
	public function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	/**
	 * This is where you can add your own functions to twig.
	 *
	 * @param Twig\Environment $twig get extension.
	 */
	public function add_to_twig( $twig ) {
		/**
		 * Required when you want to use Twig’s template_from_string.
		 * @link https://twig.symfony.com/doc/3.x/functions/template_from_string.html
		 */
		// $twig->addExtension( new Twig\Extension\StringLoaderExtension() );

		$twig->addFilter( new \Twig\TwigFilter( 'myfoo', [ $this, 'myfoo' ] ) );

		return $twig;
	}

	/**
	 * Updates Twig environment options.
	 *
	 * @link https://twig.symfony.com/doc/2.x/api.html#environment-options
	 *
	 * @param array $options An array of environment options.
	 *
	 * @return array
	 */
	function update_twig_environment_options( $options ) {
		// $options['autoescape'] = true;

		return $options;
	}
}
