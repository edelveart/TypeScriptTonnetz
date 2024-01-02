import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
    lib: {
        entry: resolve(__dirname, 'src/ts-tonnetz.ts'),
        name: 'ts-tonnetz',
        fileName: (format) => `ts-tonnetz.${format}.js`
    },
    },
    plugins: [dts()],
});