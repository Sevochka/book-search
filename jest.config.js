module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  testEnvironment: 'jsdom',
  /*
   * https://stackoverflow.com/questions/54627028/jest-unexpected-token-when-importing-css
   * https://www.npmjs.com/package/jest-transform-stub
   */
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
};
