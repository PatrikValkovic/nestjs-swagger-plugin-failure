const typescriptParser = require('@typescript-eslint/parser');
const baseConfig = require('../../eslint.config')

module.exports = [
    {
        settings: {
            'eslint-plugin-import/resolver': {
                typescript: {
                    project: ['tsconfig.spec.json'],
                },
                node: true,
            },
        },
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: 'tsconfig.spec.json',
            },
        }
    },
    ...baseConfig,
    {
        rules: {
            'new-cap': 'off',
            '@typescript-eslint/no-extraneous-class': 'off',
        }
    }
]
