const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // implement node event listeners here
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))

      return config
    },
    baseUrl: "http://localhost:8080",
    env: {
      codeCoverage: {
        url: 'http://localhost:8080/__coverage__',
      },
    },
  },
});
