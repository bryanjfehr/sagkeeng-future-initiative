/**
 * Sagkeeng Future Initiative SPA
 * © 2026 Sagkeeng Future Initiative.
 * Licensed under MIT and Proprietary Community License.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
