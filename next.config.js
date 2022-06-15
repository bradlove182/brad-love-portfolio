/** @type {import('next').NextConfig} */

const stylelintWebpackPlugin = require('stylelint-webpack-plugin');
const withTM = require('next-transpile-modules')(['three']);

const nextConfig = {
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    webpack: (config) => {
      config.plugins.push(new stylelintWebpackPlugin());
      return config;
    }
}

module.exports = withTM()
module.exports = nextConfig
