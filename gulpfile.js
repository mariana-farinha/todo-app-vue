const gulp = require("gulp");
const browserSync = require("browser-sync");
const gulpClean = require("gulp-clean");
const gulpSass = require("gulp-sass");

const config = {
  js: {
    SRC: "src/js/**/*.js",
    DEST: "dist/js"
  },
  html: {
    SRC: "src/*.html",
    DEST: "dist"
  },
  sass: {
    SRC: "src/scss/*.scss",
    DEST: "dist/css"
  },
  DEST: "dist",
  SRC: "src"
};

function clean() {
  return gulp
    .src(config.DEST, { read: false, allowEmpty: true })
    .pipe(gulpClean());
}

function javascript() {
  return gulp.src(config.js.SRC).pipe(gulp.dest(config.js.DEST));
}

function moveHTML() {
  return gulp.src(config.html.SRC).pipe(gulp.dest(config.html.DEST));
}

function sass() {
  return gulp
    .src(config.sass.SRC)
    .pipe(gulpSass.sync().on("error", gulpSass.logError))
    .pipe(gulp.dest(config.sass.DEST));
}

function server(done) {
  browserSync.init({
    server: config.DEST
  });
  done();
}

function watch(done) {
  gulp
    .watch([config.js.SRC])
    .on("all", gulp.series(javascript, browserSync.reload));

  gulp
    .watch([config.html.SRC])
    .on("all", gulp.series(moveHTML, browserSync.reload));

  gulp
    .watch([config.sass.SRC])
    .on("all", gulp.series(sass, browserSync.reload));

  done();
}

exports.default = gulp.series(clean, moveHTML, sass, javascript, server, watch);
