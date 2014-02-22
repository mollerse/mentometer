module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    reduce: {
        root: 'public',
        outRoot: 'dist',
        optimizeImages: false
    }
  });

  grunt.loadNpmTasks('grunt-reduce');

  grunt.registerTask('default', ['reduce']);
}
