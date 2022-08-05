import { defineConfig } from 'vite'

export default defineConfig({
  // this is disabled to prevent an error in CI
  // https://github.com/cypress-io/cypress/issues/6960
  server: {
    host: '127.0.0.1',
    watch: false,
  },
})
