import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  {
    ignores: ['dist', '.astro/', 'node_modules/', '**/*.astro'],
  },
  ...tseslint.configs.recommended,
];
