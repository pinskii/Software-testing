// jest.config.js
module.exports = {
  testMatch: ["<rootDir>/tests/**/*.test.js"],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
