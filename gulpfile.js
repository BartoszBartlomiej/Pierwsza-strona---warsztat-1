var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('pranie', function(done) {
    console.log('robię pranie');
    done();
});



gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded',
            sourceComments: 'map'
    }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});

