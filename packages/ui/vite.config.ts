import { defineConfig, searchForWorkspaceRoot } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        '/Users/jakob/Projects/tldraw/',
      ],
    },
  },
  optimizeDeps: {
		exclude: ['@tldraw/assets'],
  },
  plugins: [react({
    babel: {
      parserOpts: {
        plugins: ['decorators-legacy', 'classProperties']
      }
    }
  })],
  define: {
		'process.env.TLDRAW_ENV': JSON.stringify(process.env.VERCEL_ENV ?? 'development'),
	},
})
