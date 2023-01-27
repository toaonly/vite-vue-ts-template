import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import type { Alias, PluginOption } from 'vite'

const projectRootDir = path.resolve(__dirname, '../')
const resolve = (p: string) => path.resolve(projectRootDir, p)

export const configDefaults = {
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('src'),
      },
    ] as Alias[],
  },

  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
  ] as PluginOption[],
}
