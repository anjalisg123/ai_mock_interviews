module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended", // if using React
      "plugin:@typescript-eslint/recommended", // if using TypeScript
      "plugin:prettier/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      "prettier/prettier": "error",
      // your custom rules here
    },
  }
  