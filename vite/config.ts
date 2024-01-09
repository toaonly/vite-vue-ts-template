import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
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
    VueMacros({
      plugins: {
        vue: vue(),
      },
    }),
  ] as PluginOption[],
}
