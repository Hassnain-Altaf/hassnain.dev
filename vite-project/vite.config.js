import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   // Other configurations...
   assetsInclude: ['**/*.PNG', '**/*.png'], // Include both uppercase and lowercase
   build: {
    outDir: 'dist' // This tells Vite to output build files to the 'dist' directory
  }
})



