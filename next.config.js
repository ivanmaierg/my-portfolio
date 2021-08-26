/* eslint-disable no-undef */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = {
  images: {
    domains: ["res.cloudinary.com" ],
  },
  withBundleAnalyzer: (phase, defaultConfig) => {

    return withBundleAnalyzer(defaultConfig)
  },
}
