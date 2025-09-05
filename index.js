import typescriptConfig from "@flaforgue/eslint-config-typescript";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tanstackQueryPlugin from "@tanstack/eslint-plugin-query"
import betterTailwindcssPlugin from "eslint-plugin-better-tailwindcss";

export default [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooksPlugin.configs["recommended-latest"],
  ...tanstackQueryPlugin.configs['flat/recommended'],
  ...typescriptConfig,
  {
    files: [
      "**/*.{ts,tsx}",
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      "react": reactPlugin,
      "better-tailwindcss": betterTailwindcssPlugin
    },
    rules: {
      ...betterTailwindcssPlugin.configs["recommended-error"].rules,
      'better-tailwindcss/enforce-consistent-class-order': [
        'warn',
        {
          order: 'official',
        },
      ],
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'warn',
        {
          classesPerLine: 1,
          group: 'emptyLine',
          printWidth: 120,
        },
      ],

      "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
      "react/jsx-closing-tag-location": ["error"],
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react/jsx-curly-newline": ["error", "consistent"],
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-one-expression-per-line": [
        "error",
        {
          allow: "single-child",
        },
      ],
      "react/jsx-tag-spacing": [
        "error",
        {
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          beforeClosing: "never",
        },
      ],
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "@stylistic/jsx-max-props-per-line": [
        "error",
        {
          "maximum": {
            "single": 3,
            "multi": 1,
          }
        }
      ],
    },
  },
];