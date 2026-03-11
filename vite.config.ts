import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

const PRERENDER_ROUTES = [
  "/",
  "/en",
  "/sv",
  "/de",
  "/fr",
  "/it",
  "/es",
  "/no",
  "/da",
  "/en/legal/privacy",
  "/en/legal/terms",
  "/sv/legal/privacy",
  "/sv/legal/terms",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      prerender({
        routes: PRERENDER_ROUTES,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterTime: 3000,
        },
        postProcess(renderedRoute) {
          // Collapse whitespace in prerendered HTML
          renderedRoute.html = renderedRoute.html
            .replace(/\s{2,}/g, " ")
            .replace(/\n/g, "");
          return renderedRoute;
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
