# Material Project

## Initial Project Setup

1. Install [nvm](https://github.com/coreybutler/nvm-windows)
2. Install NodeJS v10.12.0
3. From a terminal run `nvm use 10.12.0.7` to enable NodeJS
4. Install [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) 
5. Install the project dependencies from a terminal by running `npm install`


## Code scaffolding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

Run `ng generate component component-name` to generate a new component. 

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Development server

Run `ng serve` to run the application in development mode.

To access the running application navigate to `http://localhost:4300/`.

The app will automatically reload if you change any of the source files.

The `--aot` flag has been added to the default in `package.json` to enable use of lazy loading.

The port can be adjusted in the `angular.json` file.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Unit tests are configured to run using [Jasmine](https://jasmine.github.io).


## Running end-to-end tests

[Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) is used for executing end-to-end tests.

[Cypress Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) is used to integrate Cypress with Cucumber.

Run `npm run cypress:open` to execute the end-to-end tests in development mode, triggering the selected test to automatically reload if you change any of the source files.

Run `npm run cypress:run` to execute the end-to-end tests in headless mode, ideal for integrating in with a CI tool. It will execute all tests found under `cypress/integration/features`

The `cypress` directory is structured as below:
* `fixtures` - Test data that can be used to populate input fields in tests.
* `integration` - Cucumber feature files.
* `plugins` - Support for plugins such as Cucumber and TypeScript. 
* `support` - Contains the test logic for the `integration` feature files.
  * `page_objects` - Reusable blocks of testing used by `step_definitions`.
  * `step_definitions` - Test code linked specifically with the Feature files.

The default end-to-end tests is stored in the `e2e` directory and is unused in this project.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Build

Run `ng build` to build the project. 

The build artifacts will be stored in the `dist/angular-material-browser` directory. 

The `--prod` flag has been added to the default for a production build.

To host the generated build on a local node server you can install [http-server](https://github.com/indexzero/http-server) globally and run `http-server` in build directory.


## Styling
[Material](https://material.angular.io) is used for the components and styling used throughout the app.


## Generating Documentation 

[Compodoc](https://compodoc.app/guides/getting-started.html) is used for documentation. 

Run `npm run compodoc` to generate the docs.

[KSS](https://github.com/kss-node/kss-node) is used for a living style guide along with the [Michelangelo](https://github.com/stamkracht/michelangelo) theme.

Run `npm run styleguide` to generate the style guide. It will run the following tasks:
* `prestyleguide` - Builds the project, extracting the CSS and producing a single file.
* `styleguide` - The old style guide is removed and a new guide will be generated.
* `poststyleguide` - All `assets` files, the generated CSS file, custom KSS styling and the style guide homepage are added to the generated style guide. 


## Quality Auditing

[Lighthouse](https://developers.google.com/web/tools/lighthouse) is used for generating a report on the performance of the application. It covers:
* Performance
* Progressive Web App
* Accessibility
* Best Practices
* SEO

It can also be installed as a Chrome extension.


## Reactive State Management

[RxJS](http://reactivex.io/rxjs/manual/overview.html) and [ngrx](https://github.com/ngrx/platform) are used for state management.

This includes the following:
* `@ngrx/effects` - Effects provides an API to model event sources as actions.
* `@ngrx/entity` - Entity State adapter for managing record collections.
* `@ngrx/router-store` - Bindings to connect the Angular Router with Store.
* `@ngrx/store` - Store is RxJS powered state management for Angular applications, inspired by Redux.
* `@ngrx/store-devtools` - Connects in with the Chrome devtools plugin.
* `ngrx-store-freeze` - A meta-reducer that prevents state from being mutable.


## Service Workers

[Angular Universal](https://github.com/angular/angular-cli/wiki/stories-universal-rendering) is used for handling data offline.

Run `npm run build:ssr` to create a build that can be deployed and hosted on a server.

Run `npm run serve:ssr` to serve this build locally for testing using webpack.

These commands can be combined by running `npm run build:ssr && server:ssr`

The build artifacts will be stored in the `dist/angular-material-server` directory. 


## Other Third Party Libraries

[ngx-pagination](http://michaelbromley.github.io/ngx-pagination/#/) is used for pagination in the application.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

