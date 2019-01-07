import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
module.exports = () => {
    return {
        input: './example/src/index.js',
        output: {
            name: 'my_network',
            globals: {
                icemilk: 'icemilk'
            },
            file: './example/dist/index.js',
            format: 'umd'
        },
        plugins: [
            json(),
            resolve(),
            commonjs(),
        ],
        external: [ 'icemilk' ],
        treeshake: false
    }
};