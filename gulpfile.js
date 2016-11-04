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
var pump        = require('pump');

// toggle css build type
// true  == bootstrap custom build and theme style gets combined into one file
// false == bootstrap and theme get built out separately
// need to also update the head.html file to load the proper stylesheets
var combineBootstrapAndTheme = true;

// -----------------------------------------------------------------------------
//  Build the Jekyll Site
// -----------------------------------------------------------------------------
gulp.task('jekyll', () => {
  const jekyll = cp.spawn('jekyll', ['serve',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// -----------------------------------------------------------------------------
// use browser sync to reload the browser
// -----------------------------------------------------------------------------
gulp.task('browser-reload', function () {
  browserSync.reload();
});

// -----------------------------------------------------------------------------
// Wait for jekyll-build, then launch the Server
// -----------------------------------------------------------------------------
if (combineBootstrapAndTheme == false) {
  gulp.task('browser-sync', ['jekyll','sass','sass-bootstrap', 'js'], function() {
    browserSync({
      proxy: "http://127.0.0.1:4000/styleguide/"
    });
  });
} else {
  gulp.task('browser-sync', ['jekyll','sass-all', 'js'], function() {
    browserSync({
      proxy: "http://127.0.0.1:4000/styleguide/"
    });
  });
}


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
        'node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
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
gulp.task('sass-all', function () {
  return gulp.src('_scss/all.scss')
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
  .pipe(copy('fonts',{prefix:5}));
});

// -----------------------------------------------------------------------------
// Watch
//  * Watch scss files for changes & recompile
//  * Watch html/md files, run jekyll & reload BrowserSync
// -----------------------------------------------------------------------------
gulp.task('watch', function () {
  gulp.watch('_js/*.js', ['js']);

  if (combineBootstrapAndTheme == false) {

    gulp.watch([
      '_scss/bootstrap-custom.scss',
      '_scss/components/_variables-theme.scss',
      '_scss/components/_bootstrap-resets.scss'
    ], ['sass-bootstrap']);
    gulp.watch('_scss/**/*.scss', ['sass']);

  } else {

    gulp.watch([
      '_scss/bootstrap-custom.scss',
      '_scss/components/_variables-theme.scss',
      '_scss/components/_bootstrap-resets.scss',
      '_scss/**/*.scss'
    ], ['sass-all']);

  }

  gulp.watch([
    '_site/**/*',
    '!_site/css/**/*', // ignore because css is already getting live injected
    '!_site/js/**/*' // ignore because js is already getting live injected
  ], ['browser-reload']);
});

// -----------------------------------------------------------------------------
// Bootstrap Lint
// -----------------------------------------------------------------------------
gulp.task('bootlint', function() {
  return gulp.src('_site/**/*.html')
    .pipe(bootlint());
});



// -----------------------------------------------------------------------------
// Default
//    * Default task, running just `gulp` will compile the sass,
//    * compile the jekyll site, launch BrowserSync & watch files.
// -----------------------------------------------------------------------------
// gulp.task('default', ['browser-sync', 'copy-fonts', 'sass-bootstrap', 'sass', 'watch']);
gulp.task('default', ['browser-sync','copy-fonts','watch']);

