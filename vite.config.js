import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/food': {
        target: 'https://winter.zuu3.kr',
        changeOrigin: true,
        secure: false
      },
      '/fisherman': {
        target: 'https://winter.zuu3.kr',
        changeOrigin: true,
        secure: false
      },
      '/record': {
        target: 'https://winter.zuu3.kr',
        changeOrigin: true,
        secure: false
      },
      '/auth': {
        target: 'https://winter.zuu3.kr',
        changeOrigin: true,
        secure: false
      },
      '/ai': {
        target: 'https://winter.zuu3.kr',
        changeOrigin: true,
        secure: false
      },
      '/cdn': {
        target: 'https://cdn.zuu3.kr',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/cdn/, '')
      }
    }
  }
})
