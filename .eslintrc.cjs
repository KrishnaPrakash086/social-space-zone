module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],

  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-console": "off",
    "no-alert": "warn",
    "no-unused-vars": "warn",
  },
};
