const server = require('@storybook/core/server')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

// eslint-disable-next-line no-unused-vars
module.exports = (api, projectOptions) => {
  api.configureWebpack(webpackConfig => {
    return {
      resolve: {
        alias: {
          components: path.resolve(__dirname, '../../src/components/'),
          containers: path.resolve(__dirname, '../../src/containers/'),
          scss: path.resolve(__dirname, '../../src/scss/'),
          vue$: require.resolve('vue/dist/vue.esm.js')
        }
      }
    }
  })

  /**
   * This section is owed to pksunkara
   * https://github.com/pksunkara/vue-cli-plugin-storybook
   */
  const resolvedConfig = api.resolveWebpackConfig()

  const wrapDefaultConfig = config => ({
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.slice(0, -4),
    },
  })

  const wrapInitialConfig = config => ({
    ...config,
    plugins: [...config.plugins, new VueLoaderPlugin()],
    module: {
      ...config.module,
      ...resolvedConfig.module,
    },
    resolve: resolvedConfig.resolve,
    resolveLoader: resolvedConfig.resolveLoader,
  })

  api.registerCommand('serve:storybook', {
    description: 'Start storybook',
    usage: 'vue-cli-service serve:storybook',
    options: {
      '-p, --port [number]': 'Port to run Storybook (required)',
      '-h, --host [string]': 'Host to run Storybook',
      '-s, --static-dir <dir-names>': 'Directory where to load static files from',
      '-c, --config-dir [dir-name]': 'Directory where to load Storybook configurations from',
      '--https': 'Serve Storybook over HTTPS. Note: You must provide your own certificate information.',
      '--ssl-ca <ca>': 'Provide an SSL certificate authority. (Optional with --https, required if using a self-signed certificate)',
      '--ssl-cert <cert>': 'Provide an SSL certificate. (Required with --https)',
      '--ssl-key <key>': 'Provide an SSL key. (Required with --https)',
      '--smoke-test': 'Exit after successful start',
      '--quiet': 'Suppress verbose build output',
    },
  }, () => {
    server.buildDev({
      packageJson: {
        name: '@storybook/vue',
        version: '4.0.0-alpha.16',
      },
      wrapInitialConfig,
      wrapDefaultConfig,
    })
  })
  api.registerCommand('build:storybook', {
    description: 'Build storybook',
    usage: 'vue-cli-service build:storybook',
    options: {
      '-s, --static-dir <dir-names>': 'Directory where to load static files from',
      '-o, --output-dir [dir-name]': 'Directory where to store built files',
      '-c, --config-dir [dir-name]': 'Directory where to load Storybook configurations from',
      '-w, --watch': 'Enable watch mode (default: false)',
    },
  }, () => {
    server.buildStatic({
      packageJson: {
        name: '@storybook/vue',
        version: '4.0.0-alpha.16',
      },
      wrapInitialConfig,
      wrapDefaultConfig,
    })
  })
}

module.exports.defaultModes = {
  'build:storybook': 'production',
}
