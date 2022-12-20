import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build : {
    rollupOptions : {
      input : {
        main : resolve(__dirname, 'index.html'),
        config : resolve(__dirname, './src/configurator/index.html'),
        backend : resolve(__dirname, './src/backend/index.html'),
        login : resolve(__dirname, './src/order/index.html'),
        login : resolve(__dirname, './src/login/index.html'),
      },
    },
  },
  plugins: [vue()],
})
