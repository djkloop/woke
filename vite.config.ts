import { URL, fileURLToPath } from 'node:url'

import { unheadVueComposablesImports } from '@unhead/vue'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
// markdown-it
import Shiki from '@shikijs/markdown-it'
import LinkAttributes from 'markdown-it-link-attributes'
import Markdown from 'unplugin-vue-markdown/vite'

//
import { createMarkDownData } from './build/build.markdown'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __STATIC__MARKDOWN__DATA__: createMarkDownData(),
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core', unheadVueComposablesImports],
      resolvers: [TDesignResolver({
        library: 'vue-next',
      })],
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [TDesignResolver({
        library: 'vue-next',
      })],
    }),
    Markdown({
      headEnabled: true,
      async markdownItSetup(md) {
        // link标签新标签页打开
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })

        // 主题
        md.use(await Shiki({
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        }))
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
