const postcss = require('gulp-postcss')
const { series, src, dest } = require('gulp')
const less = require('gulp-less')
const autoprefixer = require('autoprefixer')
const cssmin = require('gulp-cssmin')

function compile() {
  return src('./src/*.less')
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'))
}

exports.build = series(compile, copyfont)
