const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  '@assets': './assets',
};

module.exports = config;
