import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [tailwindcss(), react()],
  server: {port: 5174}
=======
  plugins: [
     tailwindcss(), react()],
     server: {port: 5173}
>>>>>>> ca0e4dc50d35e287e6cdae3c7c8f3c14254d8e7f
})
