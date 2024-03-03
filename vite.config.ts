import { defineConfig } from "vite";

import paths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [paths(), react()],
});
