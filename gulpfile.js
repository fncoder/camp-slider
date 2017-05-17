const gulp            = require('gulp');
const browserSync     = require('browser-sync').create();
const reload          = browserSync.reload;
const sass            = require('gulp-sass');
const autoprefixer    = require('gulp-autoprefixer');
const concat          = require('gulp-concat');
const cssmin          = require('gulp-cssmin');
const uglify          = require('gulp-uglify');
const babel           = require('gulp-babel');
const rename          = require('gulp-rename');

////Default
gulp.task('default', ['watch']);

////Server
gulp.task('server', ()=>{
    browserSync.init({
        server: {
            baseDir: "src"
        },
       browser: ['chrome']
    });
});

////Compile SASS to CSS
gulp.task('sass', ()=>{
  return gulp.src('src/sass/campSlider.scss')
    .pipe(concat('campSlider.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions'],cascade: false}))
    .pipe(gulp.dest('src/stylesheets'));
});


////Main CSS file to Build
gulp.task('css-build', ()=>{
  return gulp.src('src/stylesheets/campSlider.css')
    .pipe(gulp.dest('build/stylesheets'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssmin())
    .pipe(gulp.dest('build/stylesheets'))
});

////Bundle file JS to Build
gulp.task('js-build', ()=>{
  return gulp.src('src/js/campSlider.js')
    .pipe(babel())
    .pipe(gulp.dest('build/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

////All HTML files to Build
gulp.task('htmls', ()=>{
return gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
});

////Watch tasks
gulp.task('watch', ['server','sass','css-build','js-build','htmls'], ()=>{
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/stylesheets/*.css', ['css-build']).on('change', reload);
  gulp.watch('src/js/*.js', ['js-build']).on('change', reload);
  gulp.watch('src/*.html', ['htmls']).on('change', reload);
});
