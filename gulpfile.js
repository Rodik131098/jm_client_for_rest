const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass');
const babelify = require('babelify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const del = require('del');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserify = require("browserify");
// const cssnano = require('cssnano');
const replace = require('gulp-replace');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const source = require("vinyl-source-stream");

const paths = {
    html: {
        src: './src/**/*.html',
        dest: './build'
    },
    styles: {
        src: './src/scss/**/*.scss',
        dest: './build/css'
    },
    scripts: {
        src: './src/js/main.js',
        watch: './src/js/**/*.js',
        dest: './build/js'
    },
    images: {
        src: './src/images/**/*',
        dest: './build/images'
    },
    favicon: {
        src: './src/favicon.ico',
        dest: './build'
    }
};

const clean = () => del(['./build']);

// Cache busting to prevent browser caching issues
const curTime = new Date().getTime();
const cacheBust = () =>
    gulp
        .src(paths.html.src)
        .pipe(plumber())
        .pipe(fileInclude({prefix: '@@', basepath: '@file'}))
        .pipe(replace(/cb=\d+/g, 'cb=' + curTime))
        .pipe(gulp.dest(paths.html.dest));


// Copies all html files
const html =() =>
    gulp
        .src(paths.html.src)
        .pipe(plumber())
        .pipe(fileInclude({prefix: '@@', basepath: '@file'}))
        .pipe(gulp.dest(paths.html.dest));

// Convert scss to css, auto-prefix and rename into styles.min.css
const styles = () =>
    gulp
        .src(paths.styles.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(
            rename({
                basename: 'styles'
            })
        )
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());

// Minify all javascript files and concat them into a single src.min.js
const scripts = () =>
    browserify(paths.scripts.src)
        .transform(babelify.configure({presets: ["@babel/env"]}))
        .bundle()
        .pipe(source('script.js'))
        .pipe(gulp.dest(paths.scripts.dest));

// Copy and minify images
const images = () =>
    gulp
        .src(paths.images.src)
        .pipe(plumber())
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest(paths.images.dest));

// Copy the favicon
const favicon = () =>
    gulp
        .src(paths.favicon.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.favicon.dest));

// Watches all .scss, .js and .html changes and executes the corresponding task
function watchFiles() {
    browserSync.init({
        server: {
            baseDir: './build'
        },
        notify: true
    });

    gulp.watch(paths.styles.src, styles).on("change", browserSync.reload);
    gulp.watch(paths.html.src, html).on("change", browserSync.reload);
    gulp.watch(paths.favicon.src, favicon).on('change', browserSync.reload);
    gulp.watch(paths.scripts.watch, scripts).on('change', browserSync.reload);
    gulp.watch(paths.images.src, images).on('change', browserSync.reload);
}

const build = gulp.series(
    clean,
    gulp.parallel(html, styles, scripts, images, favicon),
    cacheBust
);

const watch = gulp.series(build, watchFiles);

exports.html = html;
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.favicon = favicon;
exports.watch = watch;
exports.build = build;
exports.default = build;
