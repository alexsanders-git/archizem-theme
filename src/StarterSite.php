<?php

namespace App;

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

		add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		add_filter( 'timber/twig/environment/options', [ $this, 'update_twig_environment_options' ] );

		add_action( 'acf/init', array( $this, 'register_acf_blocks' ) );
		add_filter( 'block_categories_all', [ $this, 'custom_block_category' ] );

		parent::__construct();
	}

	/**
	 * @return string
	 */
	public function theme_enqueue_scripts() {
		wp_enqueue_style( 'app-style', get_template_directory_uri() . '/assets/styles/css/app.css' );
		wp_enqueue_script( 'app-script', get_template_directory_uri() . '/assets/js/app.js' );
	}

	/**
	 * This is where you can register custom post types.
	 */
	public function register_post_types() {
	}

	/**
	 * This is where you can register custom taxonomies.
	 */
	public function register_taxonomies() {
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
