module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb", "eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-console": "warn",
    "prettier/prettier": ["error"],
    "import/no-extraneous-dependencies": "off",
  },
};
