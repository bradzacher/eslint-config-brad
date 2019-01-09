module.exports = {
    extends: ['./dist/index.js'],
    rules: {
        // disable this because copy pasta
        'multiline-comment-style': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', 'json'],
            },
        },
    },
}
