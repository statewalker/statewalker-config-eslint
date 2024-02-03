/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./index.js"],
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};
