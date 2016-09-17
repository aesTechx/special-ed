var gulp = require('gulp');
var Server = require('karma').Server;
const mocha = require('gulp-mocha');
var runSeq = require('run-sequence');

/**
 * Run test once and exit
 */
gulp.task('mocha', (cb) => 
	gulp.src(['spec/server/*.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }))
    .once('error', () => {
        process.exit(1);
    })
    .once('end', () => {
        process.exit();
    })
);
gulp.task('karma', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
gulp.task ('test', function (cb) {
  runSeq('mocha', cb)
})
/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('default', ['tdd']);