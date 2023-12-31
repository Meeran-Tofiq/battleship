module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    plugins: ['dynamic-import-node'],

    env: {
        test: {
            plugins: ['dynamic-import-node'],
        },
    },
};
