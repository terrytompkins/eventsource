require('esbuild').build({
  entryPoints: ['lib/eventsource-polyfill.js'],
  bundle: true,
  format: 'esm',
  minify: true,
  outfile: 'dist/eventsource.js',
  target: 'es6',
  platform: 'node',
}).catch(() => process.exit(1))