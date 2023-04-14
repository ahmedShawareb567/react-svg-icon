import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
      include: "**/*.tsx,.svg,.png,.jpg,.webp",
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons/svg")],
    }),
  ],
});
