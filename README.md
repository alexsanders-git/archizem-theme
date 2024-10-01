# Project Theme Setup

## Archizem Theme based by Timber

### Required Plugins:

- **Advanced Custom Fields (ACF)**
  Install ACF Pro if possible for full functionality.

- **Cyr-To-Lat**
  This plugin helps with converting Cyrillic characters to Latin ones in URLs.

- **All-in-One WP Migration and Backup**
  Use this plugin for database migration and backup purposes.

### Database Migration:

To migrate the database, follow these steps:

- Install the All-in-One WP Migration plugin.
- Locate the database file (archizem-local-db.wpress or archizem-local-db-without-plugins.wpress) in the root of the
  theme folder.
- Use the plugin to import the database from this file.

### Pages:

This theme includes the following pages:

- **Home Page:** The main landing page of the website.
- **Projects:** A page that displays custom posts of the "Projects" type.

### Custom Post Type - Projects:

A custom post type called Projects has been created. Along with it, a custom taxonomy has been added to enable
AJAX-based sorting functionality on the Projects page.

### Custom Blocks for Gutenberg:

A custom class named Blocks was created to register and configure custom Gutenberg blocks. These blocks were built using
the ACF plugin and are used to build various sections on the pages.