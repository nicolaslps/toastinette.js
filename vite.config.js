import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'toaster.vjs',
            fileName: 'toaster.vjs'
        },
        rollupOptions: {

        }
    }
})
