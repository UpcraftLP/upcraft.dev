require('dotenv').config()
const isProd = process.env.NODE_ENV === 'production'

const getHeaders = async () => {
    const headers = []

    if(process.env.X_CLACKS_OVERHEAD) {
        headers += {
            source: '/(.*)', // match ALL urls
            headers: [{
                key: 'X-Clacks-Overhead',
                value: process.env.X_CLACKS_OVERHEAD,
            }],
        }
    }
}

const cfg = {
    headers: getHeaders,
    trailingSlash: true,
    productionBrowserSourceMaps: true,
    assetPrefix: isProd ? '/' : '',
    images: {
        loader: 'custom'
    }
}

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
module.exports = withPlugins([optimizedImages], cfg)
