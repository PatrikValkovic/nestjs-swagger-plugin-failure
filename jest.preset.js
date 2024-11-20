const nxPreset = require('@nx/jest/preset').default;

module.exports = {
    ...nxPreset,
    coverageReporters: [
        'clover',
        'lcov',
        'html',
        'text',
        'text-summary',
        'cobertura',
    ],
    collectCoverageFrom: [
        'src/**/*.{ts,tsx,js,jsx}',
    ],
};
