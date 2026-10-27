import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), react(), tsConfigPaths()],
  build: {
    outDir: "dist",
    rollupOptions: {
      // The entry is pages.html (not index.html) so the project root stays
      // free of a static index.html, which would shadow the app shell on the
      // published Lovable deployment.
      input: "pages.html",
    },
  },
});
