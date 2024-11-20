export default {
  displayName: 'api',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['@swc/jest', {
      "jsc": {
        "parser": {
          "syntax": "typescript",
          "decorators": true,
          "dynamicImport": true
        },
        "transform": {
          "decoratorMetadata": true,
        },
      },
    }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/api',
};
