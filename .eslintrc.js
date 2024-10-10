module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "prettier" // Prettier 규칙과 충돌하는 ESLint 규칙 비활성화
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'prettier/prettier': ['error', { singleQuote: true }], // Prettier의 기본 따옴표 규칙 설정 (싱글 쿼테이션 사용)
  },
};
