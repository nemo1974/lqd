var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var BrowserSync = require('browser-sync');
var reload = BrowserSync.reload;
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
// var ftpConfig = require('../../../_host-mrkorakot.js');

var pathProject = 'HB/LiveLQID';
var pathLocalhost = 'http://livelqid.test/';

var assetPaths = {
    styles: {
        src: './scss',
        dist: './css',
        export: './export/css',
    },
    scripts: {
        src: './babel',
        dist: './js',
        export: './export/js',
    },
    images: {
        dist: './img',
        export: './export/img',
    },
    fonts: {
        dist: './fonts',
        export: './export/fonts',
    },
    favicon: {
        dist: './favicon',
        export: './export/favicon',
    },
    inc: {
        dist: './inc',
        export: './export/inc',
    }
}

var autoprefix_browser = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

function styles () {
    return sass(`${assetPaths.styles.src}/main/*.scss`, {style:'nested'}) //nested (default), compact, compressed, or expanded.
    .on('error', function (err) {
        console.log(err.message);
    })
    .pipe(autoprefixer({
        browsers: autoprefix_browser
    }))
    .pipe(gulp.dest(assetPaths.styles.dist));
}


function scripts () {
	return gulp.src(`${assetPaths.scripts.src}/**/*`)
    .pipe(babel({
      "presets": ["@babel/env"]
    }))
    .on('error', function(e) {
      console.log('>>> ERROR', e);
      // emit here
      this.emit('end');
    })
    .pipe(gulp.dest(assetPaths.scripts.dist))
}

// function deploy (done) {

//     var conn = ftp.create( {
//         host:     ftpConfig.config.host,
//         port:     ftpConfig.config.port,
//         user:     ftpConfig.config.user,
//         password: ftpConfig.config.password,
//         parallel: 10,
//         log:      gutil.log
//     } );

//     var globs = [];

//     Object.keys(assetPaths).forEach(key => {
//         globs.push(assetPaths[key].dist + '/**/*')
//     });
//     globs.push('./*.php')

//     // using base = '.' will transfer everything to /public_html correctly
//     // turn off buffering in gulp.src for best performance
//     gulp.src( globs, { base: '.', buffer: false } )
//     .pipe( conn.differentSize( ftpConfig.config.remotePath  + pathProject ) )
//     .pipe( conn.dest( ftpConfig.config.remotePath  + pathProject ) );
//     done();
// };

// BrowserSync
function  browserSync (done) {
    BrowserSync({
        proxy: pathLocalhost
    });
    done();
};

function exportFiles (done) {
    Object.keys(assetPaths).forEach(key => {
        gulp.src(assetPaths[key].dist + '/**/*')
        .pipe(gulp.dest(assetPaths[key].export))
    });
    gulp.src('./*.php')
    .pipe(gulp.dest('./export'))
    done()
}


// BrowserSync Reload
function browserSyncReload(done) {
    reload();
    done();
}

function watchFiles () {
    gulp.watch(`${assetPaths.styles.src}/main/*.scss` , gulp.series(styles, browserSyncReload));
    gulp.watch(`${assetPaths.scripts.src}/*.js` , gulp.series(scripts, browserSyncReload));
    gulp.watch('./*.php', browserSyncReload);
    gulp.watch('./inc/*', browserSyncReload);
    gulp.watch('./img/**/*', browserSyncReload);
}

gulp.task('default', gulp.parallel(styles, babel, watchFiles, browserSync))

gulp.task('styles', styles)
gulp.task('scripts', scripts)
// gulp.task('deploy', deploy)
gulp.task('export', exportFiles)