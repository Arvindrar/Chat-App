import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodePolyfills from "rollup-plugin-node-polyfills";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  optimizeDeps: {
    include: ["crypto-browserify"],
  },
  build: {
    rollupOptions: {
      plugins: [
        nodePolyfills(), // 👈 this adds polyfills for Node core modules like crypto
      ],
    },
  },
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      stream: "stream-browserify",
    },
  },
});
