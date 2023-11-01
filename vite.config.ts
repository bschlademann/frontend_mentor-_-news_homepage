import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://bschlademann.github.io/frontend_mentor_-_news_homepage/",
  publicDir: "src/assets"
});
