const pkg = require('./package')

module.exports = {
  mode: 'universal',

  debug: true,
  /*
  ** Headers of the page
  */
  head: {
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
  
}
