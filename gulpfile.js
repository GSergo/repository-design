const gulp = require('gulp');
const browserSync = require('browser-sync').create();



// Подключаем Browsersync
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload); //Отслеживает изменения файлов и перезагружает страницу в браузере
});