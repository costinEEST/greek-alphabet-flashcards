import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { copyFileSync, existsSync } from "fs";

export default defineConfig({
  base: process.env.GITHUB_PAGES
    ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] || "repo"}/`
    : "/",
  plugins: [
    // Custom plugin to copy assets from root to dist during build
    {
      name: "copy-assets",
      closeBundle() {
        const assets = [
          "favicon.ico",
          "favicon.svg",
          "favicon-16.svg",
          "icon-192.png",
          "icon-512.png",
        ];
        assets.forEach((asset) => {
          if (existsSync(asset)) {
            copyFileSync(asset, `dist/${asset}`);
          }
        });
      },
    },
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: ".",
      filename: "sw.js",
      injectRegister: "inline",
      devOptions: {
        enabled: true,
        type: "module",
      },
      includeAssets: [
        "favicon.ico",
        "favicon.svg",
        "favicon-16.svg",
        "icon-192.png",
        "icon-512.png",
      ],
      manifest: {
        name: "Greek Alphabet Flashcards",
        short_name: "Greek Cards",
        description:
          "Learn the Greek alphabet with interactive flashcards and pronunciation",
        theme_color: "#667eea",
        background_color: "#667eea",
        display: "standalone",
        orientation: "portrait-primary",
        start_url: "/",
        categories: ["education", "learning", "languages"],
        lang: "en",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
        ],
        shortcuts: [
          {
            name: "Start Learning",
            short_name: "Learn",
            description: "Begin studying Greek alphabet flashcards",
            url: "/",
            icons: [
              {
                src: "/icon-192.png",
                sizes: "192x192",
              },
            ],
          },
        ],
      },
    }),
  ],
  server: {
    port: 5000,
    host: "0.0.0.0",
  },
  preview: {
    port: 5000,
    host: "0.0.0.0",
  },
});
