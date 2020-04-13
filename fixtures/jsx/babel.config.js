const presets = [];
const plugins = [
    // '@babel/plugin-syntax-jsx',
    [
        '@babel/plugin-transform-react-jsx',
        {
            "runtime": "automatic",
            // "importSource": "custom-jsx-library"
        },
    ],
    // '@babel/plugin-transform-react-jsx-self',
    // '@babel/plugin-transform-react-jsx-source',
];



module.exports = {
    presets,
    plugins,
}
