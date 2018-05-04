module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ["> 3% in CN", "not ie <= 8"]
    })
  ]
}
