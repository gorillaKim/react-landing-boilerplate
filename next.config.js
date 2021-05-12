module.exports = {
  // "distDir": "build",
  // "exportTrailingSlash": true,
  // "assetPrefix": "https://~~~",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}