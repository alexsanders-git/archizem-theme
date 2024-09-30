const mix = require('laravel-mix');

mix.webpackConfig({
	stats: {
		children: true
	}
});

// JS
mix.js('assets/js/scripts/*.js', 'assets/js/app.js');

// SCSS
mix.options({
	// Don't perform any css url rewriting by default
	processCssUrls: false,
	postCss: [
		// Adding vendor prefixes to CSS
		require('autoprefixer'),
		// Grouping styles by media queries
		require('postcss-sort-media-queries'),
	],
})

mix.sass('assets/styles/scss/app.scss', 'assets/styles/css')
	.sourceMaps();

// ACF Blocks
mix.sass('blocks/main-banner/main-banner.scss', 'blocks/main-banner')
	.sourceMaps();

mix.sass('blocks/about-block/about-block.scss', 'blocks/about-block')
	.sourceMaps();