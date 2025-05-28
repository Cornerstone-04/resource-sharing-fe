import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'http://localhost:5173',
  },
})