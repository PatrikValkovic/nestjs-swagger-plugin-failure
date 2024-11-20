const typescript = require('@patrikvalkovic/eslint-config/typescript')

module.exports = [
    ...typescript({}),
    {
        rules: {
            // disable rules if necessary
        }
    },
    {
        ignores: [
            '.nx/**/*',
            'eslint.config.js',
            'jest.config.ts',
            'webpack.config.js',
        ]
    }
]
