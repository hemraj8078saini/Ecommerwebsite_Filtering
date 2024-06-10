// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      onwarn() {
        // Suppress all warnings
      },
    },
  },
});
