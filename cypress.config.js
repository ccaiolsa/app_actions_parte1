const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1qeb4f',
  reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      overwrite: false,
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
  },
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,

    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
});
