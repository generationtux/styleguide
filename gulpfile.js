var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var cp          = require('child_process');
var copy        = require('gulp-copy');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rsync       = require('rsyncwrapper').rsync;
var gutil       = require('gulp-util');
var bootlint    = require('gulp-bootlint');
var w3cjs       = require('gulp-w3cjs');
var htmlhint    = require("gulp-htmlhint");
var pump        = require('pump')

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// -----------------------------------------------------------------------------
//  Build the Jekyll Site
// -----------------------------------------------------------------------------
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
    .on('close', done);
});

// -----------------------------------------------------------------------------
// Rebuild Jekyll & do page reload
// -----------------------------------------------------------------------------
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

// -----------------------------------------------------------------------------
// Wait for jekyll-build, then launch the Server
// -----------------------------------------------------------------------------
gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    },
    notify: false
  });
});

// -----------------------------------------------------------------------------
// Concat & uglify files from _js & node_modules into both _site/js (for live injecting) and site (for future jekyll builds)
// -----------------------------------------------------------------------------
gulp.task('js', function(cb) {
  pump([
      gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'node_modules/jquery.scrollto/jquery.scrollTo.js',
        'node_modules/jquery.localscroll/jquery.localScroll.min.js',
        'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
        '_js/*.js'
      ]),
      concat('app.js'),
      uglify(),
      gulp.dest('_site/js'),
      browserSync.reload({stream:true}),
      gulp.dest('js')
    ],
    cb
  );
});

// -----------------------------------------------------------------------------
//  Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
// -----------------------------------------------------------------------------
gulp.task('sass-bootstrap', function () {
  return gulp.src('_scss/bootstrap-custom.scss')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});
gulp.task('sass', function () {
  return gulp.src('_scss/theme.scss')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});

// -----------------------------------------------------------------------------
// Copy assets to a usable place for Jekyll
// -----------------------------------------------------------------------------
gulp.task('copy-fonts', function(){
  return gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/**/*')
  .pipe(copy('fonts'));
});

// -----------------------------------------------------------------------------
// Watch
//  * Watch scss files for changes & recompile
//  * Watch html/md files, run jekyll & reload BrowserSync
// -----------------------------------------------------------------------------
gulp.task('watch', function () {
  gulp.watch('_js/*.js', ['js']);
  gulp.watch('_scss/*.scss', ['sass','sass-bootstrap']);
  gulp.watch('_scss/**/*.scss', ['sass','sass-bootstrap']);
  gulp.watch([
    '**/*.html', 
    '**/*.md', 
    '!_site/**/*'
  ], ['jekyll-rebuild']);
});

// -----------------------------------------------------------------------------
// Bootstrap Lint
// -----------------------------------------------------------------------------
gulp.task('bootlint', function() {
  return gulp.src('_site/**/*.html')
    .pipe(bootlint());
});

// -----------------------------------------------------------------------------
// W3C Validation
// ----------------------------------------------------------------------------- 
// gulp.task('validate', function () {
//   return gulp.src('_site/**/*.html')
//     .pipe(htmlhint())
//     .pipe(htmlhint.reporter);
// });
gulp.task('validate', function () {
  return gulp.src(['_site/**/*.html', '!_site/documentation/urls/index.html'])
    .pipe(w3cjs());
});

// -----------------------------------------------------------------------------
// Deploy
// ssh deploy functions - not setup so commenting out for future use
// -----------------------------------------------------------------------------
// gulp.task('deploy:staging', function() {
//   rsync({
//   ssh: true,
//   src: ['./_site/'],
//   dest: '',
//   recursive: true,
//   delete: true,
//   args: ['--verbose']
//   }, function(error, stdout, stderr, cmd) {
//     gutil.log(stdout);
//   });
// });
// gulp.task('deploy:master', function() {
//   rsync({
//   ssh: true,
//   src: ['./_site/'],
//   dest: '',
//   recursive: true,
//   delete: true,
//   args: ['--verbose']
//   }, function(error, stdout, stderr, cmd) {
//     gutil.log(stdout);
//   });
// });

// -----------------------------------------------------------------------------
// Default
//    * Default task, running just `gulp` will compile the sass,
//    * compile the jekyll site, launch BrowserSync & watch files.
// -----------------------------------------------------------------------------
gulp.task('default', ['browser-sync', 'copy-fonts', 'watch']);