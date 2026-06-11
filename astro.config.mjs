import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://darrylmorley.co.uk",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
