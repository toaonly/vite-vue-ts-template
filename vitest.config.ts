import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configDefaults, defineConfig } from 'vitest/config'
import { configDefaults as viteConfigDefaults } from './vite/config'

export default defineConfig({
  resolve: {
    alias: [...viteConfigDefaults.resolve.alias],
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
  ],
  test: {
    exclude: [...configDefaults.exclude],
    globals: true,
    environment: 'happy-dom',
  },
})
