// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [react()],
  server: {
    port: 4321,
    // host: true,
  },
  adapter: cloudflare(),
});
