import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: {
      usePolling: true, // Cần thiết để Docker nhận biết thay đổi file trên Windows
    },
    host: true, // Cần thiết để Docker map port ra ngoài (tương đương host: '0.0.0.0')
    strictPort: true,
    port: 5173,
  },
});
