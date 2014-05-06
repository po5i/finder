##Data Finder using Angular.js
==========

This the implementation of an abstract finder which consumes the API that is served from Agro-Know over an elasticsearch repository.

###Main Purpose
of this finder-app is to have an open-source, lightweight, cross-platform solution for searching our data pools, and that is easy to embodied in every web site.
It's implemented using HTML, CSS and Javascript.

###Technologies
1. **AngularJS**

2. **Native AngularJS (Angular) directives for Twitter's Bootstrap.**
Small footprint (5kB gzipped!), NO 3rd party JS dependencies (jQuery, bootstrap JS) required!
http://angular-ui.github.io/bootstrap/

###Features
- Multiple formats can be added ( for now AKIF, AGRIF are implemented )
- Different type of facets per page, with different mapping
- Canned Queries
- Pagination : "Loading more" with "Scroll to top", or normal pagination.
- Responsiveness & mobile friendliness
- Routing

TO-DO
- Fix responsiveness issues (usability)
- Add option for Open Dyslexia Typeface
- Colorblind accessibility
- Infinite-load-more when scrolling down (keep pagination option throught settings)
- Fixed position button for go back to top ( need in infinite scroll )


### Doc.

AngularJS is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications.
Its goal is to augment web-based applications with model-view-controller (MVC) capability, in an effort to make both development and testing easier.

#### Single Page Logic
Everything happens inside a single .html page. **index.html** is our main page.
`ng-app` directive defines which app will manage the specific block.
We have "akListing" module which is defined in */app/app.js* file. Everything we have built is under this module.

The #akListing div is controlled by *mainController.js* ( ng-controller="mainController.js" )
Inside #akListing we have a div with `ng-view` directive. This is used in combination with routing in order to render inside this div the specific html-template given by route.









### Usefull links
###### Angular Directives
- https://docs.angularjs.org/guide/directive
- http://stackoverflow.com/questions/13875466/what-is-an-angularjs-directive
######