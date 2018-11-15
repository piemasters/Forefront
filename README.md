# Material Project

## Initial Project Setup

1. Install [nvm](https://github.com/coreybutler/nvm-windows)
2. Install NodeJS v10.12.0
3. From a terminal run `nvm use 10.12.0.7` to enable NodeJS
4. Install [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) 
5. Install the project dependencies from a terminal by running `npm install`


## Build

To build the project:
```
$ ng build
```
The build artifacts will be stored in the `dist/angular-material-browser` directory. 

The `--prod` flag has been added to the default for a production build.


## Development Server

To run the application in development mode:
```
$ ng serve
```

To access the running application navigate to `http://localhost:4300/`.

The app will automatically reload if you change any of the source files.

The `--aot` flag has been added to the default in `package.json` to enable use of lazy loading.

The port can be adjusted in the `angular.json` file.


## Running unit tests

To execute the unit tests using [Karma](https://karma-runner.github.io) and [Jasmine](https://jasmine.github.io):
```
$ ng test
```


## Running end-to-end tests

[Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) is used for executing end-to-end tests with 
[Cypress Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) integrate for using Cucumber.

To execute the end-to-end tests in development mode:
```
$ npm run cypress:open
```
This will trigger the selected test to automatically reload if you change any of the source files.

To execute the end-to-end tests in headless mode: 
```
$ npm run cypress:open
```
This is ideal for integrating in with a CI tool. It will execute all tests found under `cypress/integration/features`

The `cypress` directory is structured as below:
* `fixtures` - Test data that can be used to populate input fields in tests.
* `integration` - Cucumber feature files.
* `plugins` - Support for plugins such as Cucumber and TypeScript. 
* `support` - Contains the test logic for the `integration` feature files.
  * `page_objects` - Reusable blocks of testing used by `step_definitions`.
  * `step_definitions` - Test code linked specifically with the Feature files.

The default end-to-end tests is stored in the `e2e` directory and is unused in this project.

To execute the end-to-end tests via [Protractor](http://www.protractortest.org/):
```
$ ng e2e
```




## Styling
[Material](https://material.angular.io) is used for the components and styling used throughout the app.


## Generating Documentation 

[Compodoc](https://compodoc.app/guides/getting-started.html) is used for documentation. 

To generate the docs:
```
$ npm run compodoc
```


[KSS](https://github.com/kss-node/kss-node) is used for a living style guide along with the [Michelangelo](https://github.com/stamkracht/michelangelo) theme.

To generate the style guide:
```
$ npm run styleguide
```

It will run the following tasks:
* `prestyleguide` - Builds the project, extracting the CSS and producing a single file.
* `styleguide` - The old style guide is removed and a new guide will be generated.
* `poststyleguide` - All `assets` files, the generated CSS file, custom KSS styling and the style guide homepage are added to the generated style guide. 


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

To create a build that can be deployed and hosted on a server:
```
$ npm run build:ssr
```

To serve this build locally for testing using webpack:
```
$ npm run serve:ssr
```
These commands can be combined by running:
 ```
$ npm run build:ssr && server:ssr
 ```

The build artifacts will be stored in the `dist/angular-material-server` directory. 


## Other Third Party Libraries

[ngx-pagination](http://michaelbromley.github.io/ngx-pagination/#/) is used for pagination in the application.


## Global Libraries

### Code Scaffolding

[Angular CLI](https://cli.angular.io/) is a command line interface for Angular.

To install:
```
$ npm install -g @angular/cli
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

To generate a new component:
```
$ ng generate component component-name
```

You can also use:
```
$ ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Quality Auditing

[Lighthouse](https://developers.google.com/web/tools/lighthouse) is used for generating a report on the performance of the application. It covers:
* Performance
* Progressive Web App
* Accessibility
* Best Practices
* SEO

To install:
```
$ npm install -g lighthouse
```

To generate a report:
```
$ npm run lighthouse
```
It can also be installed as a Chrome extension.


### Local HTTP Server 

[http-server](https://github.com/indexzero/http-server) is a simple, zero-configuration 
command-line http server. It is powerful enough for production usage, but it's simple 
and hackable enough to be used for testing, local development, and learning.

To install:
```
$ npm install -g http-server
```

To host a generated build on a local node server:
```
$ cd dist/angular-material-browser
$ http-server
```

### Environment Customisation

[penv](https://github.com/julianduque/penv) is used an environment customizer.
It is used to generate different `package.json` files for different environments using the `environments.json` file.

To install:
```
$ npm install -g penv
```

To use it run `penv <env name>` to generate that environment's `package.json` file. 
You can restore your original package.json by running 
```
$ penv base
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

