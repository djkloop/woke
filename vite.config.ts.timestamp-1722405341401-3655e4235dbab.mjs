// vite.config.ts
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "file:///D:/code/test-code/new-blog/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.13_sass@1.77.8/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/code/test-code/new-blog/node_modules/.pnpm/@vitejs+plugin-vue@5.1.1_vite@5.3.5_vue@3.4.34/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/code/test-code/new-blog/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.0_vite@5.3.5_vue@3.4.34/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///D:/code/test-code/new-blog/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.7_vite@5.3.5_vue@3.4.34/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import UnoCSS from "file:///D:/code/test-code/new-blog/node_modules/.pnpm/unocss@0.61.6_postcss@8.4.40_vite@5.3.5/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/code/test-code/new-blog/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@10.11.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/code/test-code/new-blog/node_modules/.pnpm/unplugin-vue-components@0.27.3_vue@3.4.34/node_modules/unplugin-vue-components/dist/vite.js";
import { TDesignResolver } from "file:///D:/code/test-code/new-blog/node_modules/.pnpm/unplugin-vue-components@0.27.3_vue@3.4.34/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///D:/code/test-code/new-blog/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
      resolvers: [TDesignResolver({
        library: "vue-next"
      })]
    }),
    Components({
      resolvers: [TDesignResolver({
        library: "vue-next"
      })]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlc3QtY29kZVxcXFxuZXctYmxvZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFx0ZXN0LWNvZGVcXFxcbmV3LWJsb2dcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvdGVzdC1jb2RlL25ldy1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVVJMLCBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBURGVzaWduUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlSnN4KCksXG4gICAgdnVlRGV2VG9vbHMoKSxcbiAgICBVbm9DU1MoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAncGluaWEnLCAnQHZ1ZXVzZS9jb3JlJ10sXG4gICAgICByZXNvbHZlcnM6IFtURGVzaWduUmVzb2x2ZXIoe1xuICAgICAgICBsaWJyYXJ5OiAndnVlLW5leHQnLFxuICAgICAgfSldLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbVERlc2lnblJlc29sdmVyKHtcbiAgICAgICAgbGlicmFyeTogJ3Z1ZS1uZXh0JyxcbiAgICAgIH0pXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1EsU0FBUyxLQUFLLHFCQUFxQjtBQUUzUyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHVCQUF1QjtBQVRtSSxJQUFNLDJDQUEyQztBQVlwTixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsT0FBTyxjQUFjLFNBQVMsY0FBYztBQUFBLE1BQ3RELFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQSxRQUMxQixTQUFTO0FBQUEsTUFDWCxDQUFDLENBQUM7QUFBQSxJQUNKLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQSxRQUMxQixTQUFTO0FBQUEsTUFDWCxDQUFDLENBQUM7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
