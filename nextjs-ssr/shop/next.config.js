const { withFederatedSidecar } = require('@module-federation/nextjs-ssr');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR

module.exports = withFederatedSidecar(
  {
    name: 'shop',
    filename: 'static/chunks/remoteEntry.js',
    exposes: {
      './shop': './async-pages/shop.js',
    },
    remotes:[],
    shared: {
      react: {
        requiredVersion: false,
        singleton: true,
      },
    },
  },
  {
    experiments: {
      flushChunks: true,
      hot: true,
    },
  },
)({
  webpack5: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /_app.js/,
      loader: '@module-federation/nextjs-ssr/lib/federation-loader.js',
    });

    return config;
  },
});
