import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    port: process.env.PORT || 3000, // Use Render's port or default to 3000
    host: true, // Bind to 0.0.0.0 to allow external connections
  },
  build: {
    outDir: 'dist', // Ensure output directory is set
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
