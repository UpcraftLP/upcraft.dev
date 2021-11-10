require('dotenv').config()
const isProd = process.env.NODE_ENV === 'production'
const xClacksOverhead = process.env.X_CLACKS_OVERHEAD || ''

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const rawImages = ({src, width, quality }) => src

const cfg = {
    async headers() {
        return [
            {
                source: '/(.*)', // match ALL urls
                headers: [
                    {
                        key: 'X-Clacks-Overhead',
                        value: xClacksOverhead,
                    },
                ]
            },
        ]
    },
    trailingSlash: true,
    productionBrowserSourceMaps: true,
    assetPrefix: isProd ? '/' : '',
    images: {
        loader: 'custom'
    }
}

module.exports = withPlugins([optimizedImages], cfg)
