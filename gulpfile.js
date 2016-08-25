var gulp        = require('gulp');

var plugins     = require('gulp-load-plugins')({lazy: false});

var exec        = require('child_process').exec;
var pump        = require('pump');

var srcJs       = allFiles('src/js', 'js');
var srcHtml     = allFiles('src/html', 'html');
var srcScss     = allFiles('src/scss', 'scss');

var distProd    = 'static';
var dstJs       = distProd + '/js';
var dstCss      = distProd + '/css';

function allFiles(root, ext) {
  return root + '/**/*.' + ext;
}

var postcssOptions = [
  require('autoprefixer'),
  require('cssnano')
];

gulp.task('src', function() {
    // Build the js source files
  return gulp.src(srcJs)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.babel({ presets: ['es2015'] }))
      .pipe(plugins.uglify())
      .pipe(plugins.concat('pmhcmds-static-src.min.js'))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(dstJs));
});

gulp.task('lib', function(cb) {
    // Build the third-party js files
    // Main entries may need to be explicitly stated in bower.json to pick up just the JS files.
  pump([
    gulp.src('bower.json'),
    plugins.mainBowerFiles({debugging: true}),
    plugins.sourcemaps.init(),
    plugins.uglify(),
    plugins.concat('pmhcmds-static-lib.min.js'),
    plugins.sourcemaps.write('.'),
    gulp.dest(dstJs)
  ], cb);
});

gulp.task('scss', function() {
    // Build main.css
  var sassOptions = {
    outputStyle: 'expanded',
    includePaths: []
  };

  gulp.src(srcScss)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass(sassOptions))
      .pipe(plugins.postcss(postcssOptions))
      .pipe(plugins.sass.sync().on('error', function() { console.log('sass compilation error'); }))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(dstCss));
});

gulp.task('watch', function() {
    // plugins.watch for changes and trigger rebuilds as necessary
  gulp.watch([ srcHtml ], ['partials']);
  gulp.watch([ srcJs ],   ['src']);
  // gulp.watch([ libJs ],   ['lib']);
  gulp.watch([ srcScss ], ['scss']);
});

gulp.task('webserver', function() {
    // Static web server
  gulp.src(distProd)
      .pipe(plugins.webserver({
        host: '127.0.0.1',
        port: '5010',
        livereload: true
      }));
});

gulp.task('docker', function(cb) {
  exec('./docker.sh build && ./docker.sh run',
    function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
});

gulp.task('serve', ['watch', 'webserver']);
gulp.task('build', ['src', 'lib', 'scss']);

gulp.task('default', ['watch', 'build', 'serve']);
