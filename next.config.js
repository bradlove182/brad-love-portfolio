/** @type {import('next').NextConfig} */

const stylelintWebpackPlugin = require('stylelint-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
      config.plugins.push(new stylelintWebpackPlugin());
      return config;
  }
}

module.exports = nextConfig
