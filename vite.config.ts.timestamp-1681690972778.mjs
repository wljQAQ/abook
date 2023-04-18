// vite.config.ts
import { defineConfig } from "file:///F:/demo/abook/node_modules/.pnpm/vite@3.1.8_less@4.1.3/node_modules/vite/dist/node/index.js";
import react from "file:///F:/demo/abook/node_modules/.pnpm/@vitejs+plugin-react@2.1.0_vite@3.1.8/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteEslint from "file:///F:/demo/abook/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.25.0+vite@3.1.8/node_modules/vite-plugin-eslint/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "F:\\demo\\abook";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src"),
      "~": resolve(__vite_injected_original_dirname, "./node_modules")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxkZW1vXFxcXGFib29rXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxkZW1vXFxcXGFib29rXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9kZW1vL2Fib29rL3ZpdGUuY29uZmlnLnRzXCI7LypcbiAqIEBBdXRob3I6IHdsalxuICogQERhdGU6IDIwMjItMTAtMjAgMTQ6NDM6MTVcbiAqIEBMYXN0RWRpdG9yczogd3Vsb25namlhbmdcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMTEtMjAgMTk6NDI6MjZcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHZpdGVFc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHZpdGVFc2xpbnQoe1xuICAgICAgZmFpbE9uRXJyb3I6IGZhbHNlXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICd+JzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL25vZGVfbW9kdWxlcycpXG4gICAgfVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBT0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsZUFBZTtBQVZ4QixJQUFNLG1DQUFtQztBQWF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUMvQixLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsSUFDMUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsTUFDOUM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
