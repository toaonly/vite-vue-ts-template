import analyze from 'rollup-plugin-analyzer'
import { defineConfig, loadEnv } from 'vite'
import svgLoader from 'vite-svg-loader'
import { configDefaults } from './vite/config'
import { htmlPlugin } from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    resolve: {
      alias: [...configDefaults.resolve.alias],
    },
    plugins: [
      analyze({
        showExports: true,
        skipFormatted: true,
        summaryOnly: true,
      }),
      svgLoader({
        defaultImport: 'raw',
      }),
      htmlPlugin(),
      ...configDefaults.plugins,
    ],
  }
})
