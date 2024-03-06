import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    server: {
        open: true,
        cors: true
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
})