<?php

/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 * @link https://github.com/timber/starter-theme
 */

namespace App;

use Timber\Timber;

// Load Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/inc/helpers.php';
require_once __DIR__ . '/src/StarterSite.php';
require_once __DIR__ . '/src/Blocks.php';

// Actions
require_once __DIR__ . '/inc/actions/sort-projects-by-type.php';

Timber::init();

new StarterSite();
new Blocks();