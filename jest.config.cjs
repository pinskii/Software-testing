export default {
  testMatch: ["<rootDir>/tests/**/*.test.js"],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
