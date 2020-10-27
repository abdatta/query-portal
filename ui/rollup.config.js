import dev from 'rollup-plugin-dev'
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

function validate(watch) {
    let validator;

    function toExit() {
        if (validator) validator.kill(0);
    }

    return {
        writeBundle() {
            if (validator) return;

            const args = ['run', 'validate'];
            if (watch) args.push('--', '--watch');
            validator = require('child_process').spawn('npm', args, {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}

export default {
    input: 'src/main.ts',
    output: {
        sourcemap: !production,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css: css => {
                css.write('bundle.css');
            },
            preprocess: sveltePreprocess(),
        }),

        postcss({
            extract: true,
            minimize: true,
            use: [
              ['sass', {
                includePaths: [
                  './src/theme',
                  './node_modules'
                ]
              }]
            ]
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
        typescript({
            sourceMap: !production,
            inlineSources: !production
        }),

        // Run svelte-check for typescript compilation
        validate(!production),

        // In dev mode, serve the public folder with api proxy
        !production && dev({
            host: 'localhost',
            port: 5000,
            dirs: ['public'],
            spa: 'public/index.html',
            proxy: { '/api/*': 'http://localhost:3000/' },
        }),

        // In dev mode, watch the `public` directory for changes and reload
        !production && livereload('public'),

        // If we're building for production, minify
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};
