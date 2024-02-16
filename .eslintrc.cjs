module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
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
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    // eslint (https://zh-hans.eslint.org/docs/latest/rules/)
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-multiple-empty-lines": ["warn", { max: 2 }], // 不允许多个空行
    "no-unused-vars": "warn", // 警告未使用的变量
    // 环境变量为production时，禁用console和debugger
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-useless-escape": "warn", // 警告不必要的转义字符而不是错误

    // vue (https://eslint.vuejs.org/rules/)
    "vue/attribute-hyphenation": "warn", // 组件的特性名称必须是连字符
    "vue/multi-word-component-names": "warn", // 组件名称必须是多个单词
  },
};
