module.exports = {
  dev: {
    https: false,
    port: 9000,
    host: '0.0.0.0',
    notifyOnErrors: true
  },
  devMode: process.env.NODE_ENV !== 'production'
}
