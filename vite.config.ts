import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://besdoth.github.io/Louise-Dove-Hair/, so assets need the
// repo name as their base. Change to '/' if a custom domain is added later.
export default defineConfig({
  base: '/Louise-Dove-Hair/',
  plugins: [react(), tailwindcss()],
})
