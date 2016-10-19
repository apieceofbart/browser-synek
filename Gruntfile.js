module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: [
          'sass/style.sass'
        ],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass' 
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/script.min.js': 'js/script.js'
        }
      }
    },

    browserSync: {
      bsFiles: {
        src: [
          'css/style.css',
          'pages/index.html',
          'pages/script.js'
        ]
      },
      options: {
        watchTask: true,
        server: ['./pages', './css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify', 'sass', 'browserSync', 'watch']);
};