module.exports = function(grunt) {
  // Load the plugins that provide the tasks
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  const dummyDbObject = {
    debug: true,
    polls: [
      {name: 'gordita'},
      {name: 'guapa'},
      {name: 'gordito'},
      {name: 'feo'},
    ],
    user: {name: 'Peter la anguila'},
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compact',
          cacheLocation: '.sass-cache',
        },
        files: [{
          expand: true,
          cwd: 'public/styles',
          src: '*.sass',
          dest: 'public/styles/css/',
          ext: '.css',
        }],
      },
    },

    pug: {
      idx: {
        options: {
          pretty: true,
          data: dummyDbObject,
        },
        files: {
          'views/index.html': 'views/index.pug',
        },
      },
    },

    autoprefixer: {
      dist: {
        src: 'public/styles/css/*.css',
      },
    },

    connect: {
      server: {
        options: {
          base: '',
          livereload: true,
          target: 'views/index.html',
        },
      },
    },

    watch: {
      options: {
        livereload: 35729,
      },
      pug: {
        files: ['views/*.pug', 'views/includes/*.pug'],
        tasks: ['pug'],
        options: {
          livereload: true,
        },
      },
      sass: {
        files: 'public/styles/*.sass',
        tasks: ['sass'],
      },
      html: {
        files: [
          'views/*.html',
          'public/css/*.css',
          'assets/*',
        ],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.registerTask('default', ['sass', 'pug', 'autoprefixer:dist', 'connect',
    'watch']);
  grunt.registerTask('changes', ['watch']);
};
