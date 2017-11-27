var path = require('path');

module.exports = {
  bundle: {
    article: {
      scripts: [
        'src/*.js'
      ],
      options: {
        uglify: true,
        rev: true,
        pluginOptions: {
          'gulp-uglify': {mangle: true, sourceMap: true},
          'gulp-concat': {stat: {mode: 0666}},
          'gulp-sourcemaps': {
            init: {debug: true},
            write: {addComment: false},
            destPath: 'maps',
            scripts: {
              init: {loadMaps: true},
              write: {addComment: true}
            },
            styles: {
              init: {loadMaps: true},
              destPath: 'maps'
            }
          }
        }
      }
    }
  }
};
