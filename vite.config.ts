import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/react-fem-template/",
  plugins: [react()],
});
