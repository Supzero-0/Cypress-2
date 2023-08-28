const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vy5aod',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
