const globals = {
  console: "readonly",
  process: "readonly",
  require: "readonly",
  module: "readonly",
  __dirname: "readonly",
};

module.exports = [
  {
    files: ["tests-js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals,
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
    },
  },
];
