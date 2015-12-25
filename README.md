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

Each of the pages (aside from the home page) will be loaded into the `ui-view` div via the controller attached to each state. All pages within the Band Information section will have content which is loaded via ajax, through custom services.

Shows doesn't have a design yet, but will probably be a list of shows pulled from an external service.

Blog will point at a self-hosted blog, with entries from members of the band (probably) with topics ranging from practice sessions (added after the fact) to live show details and musical influences.

## Requirements

 * Web server required on hosting platform (otherwise services will fail due to browser interpreting them as cross site scripting attacks).
 * Node may be required on the web server - need to investigate.

## Version History

### 0.0.1 - 25th December 2015

Notes:

 * Initial version of the site, with some placeholder images and text content being loaded in via custom ajax services
 * Angular app providing all views - provided by state based on requested page
 * Content for all views provided by custom Angular controllers

Todo:

 * Replace each custom ajax service with a single service (each controller is calling a separate service, all of which do the same thing)
 * Add actual content to instruments page (and remove links to copyrighted images)
 * Add actual image content to band members page (replacing placeholder images)
 * Add SoundCloud player to Recordings page (test ones will do for now)
 * Style website so that it no longer looks like a Bootstrap template. Requires design to be finalised.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
