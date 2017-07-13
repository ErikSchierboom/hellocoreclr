const path = require('path')

const src = path.resolve(__dirname, 'src')
const test = path.resolve(__dirname, 'test')
const nodeModules = path.resolve(__dirname, 'node_modules')

module.exports = (config) => {
  config.set({
    logLevel: 'warn',
    frameworks: ['jasmine'],
    files: [
      {pattern: 'node_modules/core-js/client/shim.min.js', instrument: false},
      {pattern: 'test/**/*.spec.ts', load: false}
    ],
    preprocessors: {
      'test/**/*.spec.ts': ['webpack']
    },
    webpack: {
      module: {
        rules: [
          { test: /\.ts$/, loader: 'ts-loader', exclude: nodeModules },
          { test: /\.css$/i, loader: 'css-loader' },
          { test: /\.ts$/i, enforce: 'post', loader: 'istanbul-instrumenter-loader', exclude: test }
        ]
      },
      resolve: {
        extensions: ['.ts', '.js'],
        modules: [src, nodeModules]
      }
    },
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },
    autoWatchBatchDelay: 10000,
    singleRun: true,
    browsers: ['PhantomJS'],
    mime: {
      'text/x-typescript': ['ts']
    },
    captureTimeout: 5000,
    browserDisconnectTimeout: 5000,
    browserDisconnectTolerance: 5,
    browserNoActivityTimeout: 10000,
    reporters: [ 'progress', 'coverage-istanbul' ],
    coverageIstanbulReporter: {
      skipFilesWithNoCoverage: false,
      reports: [ 'text-summary', 'json' ],
      fixWebpackSourcePaths: true,
      dir: __dirname.replace('\\', '/') + '/../reports/',
      'report-config': { 'json': { file: 'coverage-ts.json' } }
    }
  })
}
