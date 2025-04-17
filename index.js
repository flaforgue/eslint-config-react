import tsEslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      }
    },
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooksPlugin.configs["recommended-latest"],
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
    },
    rules: {
      "react/jsx-closing-tag-location": ["error"],
      "react/jsx-tag-spacing": [
        "error",
        {
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          beforeClosing: "never",
        },
      ],
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react/jsx-curly-newline": ["error", "consistent"],
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
      "react/jsx-tag-spacing": ["error"],
      "react/jsx-one-expression-per-line": [
        "error",
        {
          allow: "single-child",
        },
      ],
    },
  },
];