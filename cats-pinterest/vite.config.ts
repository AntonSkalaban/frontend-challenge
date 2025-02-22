import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      app: "/src/app",
      pages: "/src/pages",
      shared: "/src/shared",
      features: "/src/features",
      entities: "/src/entities",
      widgets: "/src/widgets",
    },
  },
});
