import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooksPlugin.configs["recommended-latest"],
  {
    files: ["**/*.tsx"],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      "react": reactPlugin,
    },
    rules: {
      "react/jsx-closing-tag-location": ["warn"],
      "react/jsx-tag-spacing": [
        "warn",
        {
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          beforeClosing: "never",
        },
      ],
      "react/jsx-curly-brace-presence": ["warn", "never"],
      "react/jsx-curly-newline": ["warn", "consistent"],
      "react/jsx-first-prop-new-line": ["warn", "multiline"],
      "react/self-closing-comp": [
        "warn",
        {
          component: true,
          html: true,
        },
      ],
      "react/jsx-indent-props": ["warn", 2],
      "react/jsx-closing-bracket-location": ["warn", "tag-aligned"],
      "react/jsx-tag-spacing": ["warn"],
      "react/jsx-one-expression-per-line": [
        "warn",
        {
          allow: "single-child",
        },
      ],
    },
  },
];