const { defineConfig } = require('cypress')

module.exports = defineConfig({
  includeShadowDom: true,
  component: {
    devServer: {
      bundler: 'vite',
    },
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'cypress.reporter.config.json',
  },
})
