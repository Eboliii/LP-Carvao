import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'node265865-env-7130093.sp1.br.saveincloud.net.br',
      'env-7130093.sp1.br.saveincloud.net.br',
    ],
    hmr: {
      clientPort: 80 
    }
  }
})