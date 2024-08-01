import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'
import { unheadVueComposablesImports } from '@unhead/vue'
// markdown-it
import Markdown from 'unplugin-vue-markdown/vite'
import LinkAttributes from 'markdown-it-link-attributes'
import Shiki from '@shikijs/markdown-it'

// https://vitejs.dev/config/
export default defineConfig({
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
          defaultColor: false,
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
