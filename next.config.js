const path = require('path');
const dotenv = require('dotenv').config({
  path: '.env.local',
});

const dotenvParsed = dotenv.parsed;

module.exports = {
  basePath: '',
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  publicRuntimeConfig: {
    dotenvParsed,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};
