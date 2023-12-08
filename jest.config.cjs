module.exports = {
  testMatch: ["<rootDir>/tests/**/*.test.js"],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'cjs'],
};
