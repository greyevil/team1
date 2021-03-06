module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        asi: true,
        camelcase: true,
        freeze: true,
        immed: true,
        indent: 2,
        latedef: true,
        maxcomplexity: 10,
        maxlen: 120,
        noarg: true,
        noempty: true,
        nonbsp: true,
        node: true,
        nonew: true,
        undef: true,
        unused: true,
        strict: false,
        trailing: true
      },
      files: ['server']
    },
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')
}
