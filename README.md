# eslint-config-react

## Installation

```shell
npm install -D @flaforgue/eslint-config-react
yarn add -D @flaforgue/eslint-config-react
```

Follow [Configure eslint-plugin-better-tailwindcss
Public settings](https://github.com/schoero/eslint-plugin-better-tailwindcss?tab=readme-ov-file#quick-start).

## Usage (flat config)

Use in your `eslint.config.js` file:

```js
import { defineConfig } from "eslint/config";
import reactConfig from "@flaforgue/eslint-config-react";

export default defineConfig([
  // ...
  {
    files: [
      "**/*.{ts,tsx}",
    ],
    extends: [reactConfig],

    // anything from here will override reactConfig
    // rules: {
    //   "react/jsx-one-expression-per-line": [
    //     "warn",
    //     {
    //       allow: "none",
    //     },
    //   ],
    // },
  },
  // ...
]);
```

## License

ISC
