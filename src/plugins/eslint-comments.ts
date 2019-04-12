const rules : Rules.EslintComments = {
    // require a eslint-enable comment for every eslint-disable comment
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
    'eslint-comments/disable-enable-pair': [
        'error',
        {
            allowWholeFile: true,
        },
    ],

    // disallow a eslint-enable comment for multiple eslint-disable comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
    'eslint-comments/no-aggregating-enable': 'error',

    // disallow duplicate eslint-disable comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
    'eslint-comments/no-duplicate-disable': 'error',

    // disallow eslint-disable comments without rule names
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
    'eslint-comments/no-unlimited-disable': 'error',

    // disallow unused eslint-disable comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
    'eslint-comments/no-unused-disable': 'error',

    // disallow unused eslint-enable comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
    'eslint-comments/no-unused-enable': 'error',

    // disallow eslint-disable comments about specific rules
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
    'eslint-comments/no-restricted-disable': 'off',

    // disallow ESLint directive-comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html
    'eslint-comments/no-use': [
        'error',
        {
            allow: [
                'eslint-disable',
                'eslint-disable-line',
                'eslint-disable-next-line',
                'eslint-enable',
            ],
        },
    ],
}

export default {
    name: 'eslint-comments',
    rules,
}
