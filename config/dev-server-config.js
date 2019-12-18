module.exports = {
  dev: {
    https: false,
    port: 9000,
    host: 'localhost',
    notifyOnErrors: true
  },
  devMode: process.env.NODE_ENV !== 'production'
}
