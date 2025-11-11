import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://Rudieri34.github.io/RudieriPortfolio/' // change this to your GitHub repo name or remove for root
});

