import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Each presentation lives in its own folder; this one is "The Reality Check".
export default defineConfig({
  plugins: [react()],
  server: { port: 5174, strictPort: true, open: true },
})
