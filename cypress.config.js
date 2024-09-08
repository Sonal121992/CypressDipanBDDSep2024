const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; //this
module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature", //this
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber()); //this
    },
  },
});
