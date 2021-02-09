module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:vue/recommended", "prettier", "prettier/vue"],
  // add your custom rules here
  rules: {
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "array-callback-return": "error",
    eqeqeq: "error",
    "no-console": "error",
    "no-eval": "error",
    "require-await": "error",
    "no-undef-init": "error",
    "no-var": "error",
    "vue/no-restricted-syntax": "error",
    "vue/v-on-function-call": "error",
    "vue/prop-name-casing": "off",
  },
  overrides: [
    // TypeScript系ファイルへのルールを設定
    {
      files: ["**/*.ts"],
      extends: ["plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
    },
  ],
}
