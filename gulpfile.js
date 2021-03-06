var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('sass', function () {  
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on("change", reload);
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("scss/*.scss", ['sass']);
});