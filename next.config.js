/** @type {import('next').NextConfig} */


const wuthPlugins = require('next-compose-plugins');
const stylelintWebpackPlugin = require('stylelint-webpack-plugin');
const withTM = require('next-transpile-modules')(['three']);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});


const nextConfig = {
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    webpack: (config) => {
      config.plugins.push(new stylelintWebpackPlugin());
      return config;
    }
}

module.exports = wuthPlugins([
    withTM,
    withBundleAnalyzer
], nextConfig);
