import alias from '@rollup/plugin-alias'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import analyze from 'rollup-plugin-analyzer'
import * as path from 'path'
import eslintPlugin from 'vite-plugin-eslint'

const projectRootDir = path.resolve(__dirname)
const resolve = (p: string) => path.resolve(projectRootDir, p)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve('src'),
        },
      ],
    }),
    analyze({
      showExports: true,
      skipFormatted: true,
      summaryOnly: true,
    }),
    eslintPlugin(),
    vue({
      reactivityTransform: true
    }),
  ],
})
