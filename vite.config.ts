import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@tests': path.resolve(__dirname, 'src/tests'),
            '@theme': path.resolve(__dirname, 'src/theme'),
            '@typing': path.resolve(__dirname, 'src/types')
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/configuration/SetupTests.tsx',
        retry: 2,
        testTimeout: 60000,
        coverage: {
            all: true,
            reporters: ['json', 'html'],
            include: ['src/**/*.tsx'],
            mockReset: true,
            reportOnFailure: true
        }
    }
});
