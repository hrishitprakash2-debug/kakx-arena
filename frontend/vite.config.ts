import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // three.js ships a big main chunk warning — expected, 3D is lazy-loaded
    chunkSizeWarningLimit: 900,
  },
});
