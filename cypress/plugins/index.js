// const cucumber = require("cypress-cucumber-preprocessor").default;
// const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
//
// module.exports = on => {
//   on('file:preprocessor', cypressTypeScriptPreprocessor)
// };

// const cucumber = require("cypress-cucumber-preprocessor").default;
// const browserify = require("@cypress/browserify-preprocessor");
//
// module.exports = (on) => {
//   const options = browserify.defaultOptions;
//
//   options.browserifyOptions.plugin.unshift(['tsify']);
//   // Or, if you need a custom tsconfig.json for your test files:
//   //options.browserifyOptions.plugin.unshift(['tsify', {project: '../cypress/tsconfig.json'}]);
//
//   on("file:preprocessor", cucumber(options));
// };

const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)
  on('file:preprocessor', cucumber())
};

