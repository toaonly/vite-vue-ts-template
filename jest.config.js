module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ],
        plugins: ['@vue/babel-plugin-jsx'],
      },
    },
  },

  coverageReporters: ['text', 'lcov', 'json-summary'],

  preset: 'ts-jest',

  transform: {
    '^.+\\.ts(x)$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },

  testMatch: ['**/tests/unit/**/*.spec.ts?(x)', '**/__test?(s)__/*.ts?(x)'],

  roots: ['<rootDir>'],

  snapshotSerializers: ['jest-serializer-vue'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  testEnvironment: 'jest-environment-jsdom',

  transformIgnorePatterns: ['node_modules'],
}
