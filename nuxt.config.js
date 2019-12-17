const pkg = require('./package')
import Mode from "frontmatter-markdown-loader/mode"
const path = require('path')

module.exports = {
  mode: 'universal',

  debug: true,
  /*
  ** Headers of the page
  */
  head: {
    // HTML property attribute
    htmlAttrs: {
      lang: 'es-mx',
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://ssrefiscales.com.mx',
    routes: [
      '/',
      '/servicios',
      '/nosotros',
    ],
  },
  
  css: [
    '~/sass/index.scss',
  ],

  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  
  build: {
    extend (config) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          include: path.resolve(__dirname, 'blog'),
        }
      )
    }
  },
  /* Views Generate */
  generate: {
    routes: [
      '/articulos/mi-articulo',
      '/articulos/bad-man-loco',
    ]
  }
}
