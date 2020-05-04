const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano'); // Подключаем пакет для минификации CSS
const	rename = require('gulp-rename'); // Подключаем библиотеку для переименования файлов


// Подключаем Browsersync
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);  //Отслеживает изменения файлов и перезагружает страницу в браузере
});


//Минимизирует файлы CSS и прибавляет к ним окончание .min.css
gulp.task('css-libs', function() {
	return gulp.src('css/*.css')                 // Выбираем файл для минификации
		.pipe(cssnano())                           // Сжимаем
		.pipe(rename({suffix: '.min'}))            // Добавляем суффикс .min
		.pipe(gulp.dest('css/min'));               // Выгружаем в папку app/css
});
