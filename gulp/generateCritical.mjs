import gulp from 'gulp';
import {stream as critical} from 'critical';

const criticalCss = () => {
  return gulp
      .src('build/*.html')
      .pipe(
          critical({
            base: 'build/',
            inline: true,
            ignore: {
              atrule: ['@font-face'],
            },
            dimensions: [
              {
                height: 600,
                width: 360,
              },
              {
                height: 750,
                width: 1440,
              }
            ],
          })
      )
      .pipe(gulp.dest('build'));
};

export default criticalCss;
