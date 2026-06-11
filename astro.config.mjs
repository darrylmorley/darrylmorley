import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.darrylmorley.co.uk",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
