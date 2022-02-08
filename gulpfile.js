//css and sass
const {src, dest, watch, series,parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

// Images 
const imagesmin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');



const schedule = () => {    
    return src('src/scss/styles.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('src/'));
    
};

const dev = () => {
    return watch('src/scss/**/*.scss', schedule),
    watch('src/scss/img/**/*', images);
    
}

const images = () => {
    return src('src/scss/img/**/*.{png,jpg,jpeg,gif}')
    .pipe(imagesmin({ optimizationLevel: 3 }))
    .pipe(dest('src/assets/img'));
}

const webpimages = () => {
    const options = {
        quality: 50,
    }
    return src('src/scss/img/**/*.{png,jpg,jpeg,gif}')
    .pipe(webp(options))
    .pipe(dest('src/assets/img'));
}

const avifimages = () => {
    const options = {quality: 50}
    return src('src/scss/img/**/*.{png,jpg,jpeg,gif}')
    .pipe(avif(options))
    .pipe(dest('src/assets/img'));
}

exports.schedule = schedule;
exports.dev = dev;
exports.images = images;
exports.webpimages = webpimages;
exports.avifimages = avifimages;
exports.default = series(images, webpimages, avifimages, schedule, dev );