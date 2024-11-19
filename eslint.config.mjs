import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ['**/build', '**/coverage', '**/dist', '**/node_modules', '**/assets']
    },
    ...compat.extends('standard', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'prettier'),
    {
        plugins: {
            react
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {}
    },
    {
        files: ['**/.eslintrc.{js,cjs}'],
        languageOptions: {
            ecmaVersion: 5,
            sourceType: 'commonjs'
        }
    }
];
