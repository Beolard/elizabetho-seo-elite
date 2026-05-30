// vite.config.ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    adapter: "static",        // 👈 force static export
    server: { entry: "server" },
    outDir: "dist/client",    // 👈 output folder for static HTML + assets
  },
  vite: {
    build: {
      outDir: "dist/client",  // 👈 prevent nested dist/client/client
    },
  },
});

