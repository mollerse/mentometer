module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    reduce: {
        root: 'public',
        outRoot: 'dist'
    }
  });

  grunt.loadNpmTasks('grunt-reduce');

  grunt.registerTask('default', ['reduce']);
}
