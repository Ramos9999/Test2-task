const ignorePaths = ['!**/pages/**'];

const customJestConfig = {
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.tsx',
    '<rootDir>/**/*.test.tsx',
    '<rootDir>/**/*.test.tsx',
  ],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/test/svgrMock.js',
    '@util/(.*)': '<rootDir>/utils/',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.tsx',
    '<rootDir>/utils/*.ts',
    ...ignorePaths,
  ],
  cacheDirectory: '<rootDir>/.jest-cache',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  coveragePathIgnorePatterns: ['<rootDir>/next.config.js'],
};

module.exports = customJestConfig;
