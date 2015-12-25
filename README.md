# Rebels on the Inside

This single page app (SPA) is the code which will run the website for Leeds rock band Rebels on the inside.

This project is generated with `yo angular generator` version 0.15.1.

## Purpose of Build

Primarily to teach myself how to make Angular Single Page Apps, with full MVVM architecture.

## Site Layout

The site layout will be simple:

 * Band Information
   * History
   * Members
   * Equipment
   * etc...
 * Shows
 * Blog

Each of the pages (aside from the home page) will be loaded into the ui-view div via the controller attached to each state. All pages within the Band Information section will have content which is loaded via ajax, through custom services.

Shows doesn't have a design yet, but will probably be a list of shows pulled from an external service.

Blog will point at a self-hosted blog, with entries from members of the band (probably) with topics ranging from practice sessions (added after the fact) to live show details and musical influences.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
