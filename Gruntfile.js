module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-inline');

    grunt.initConfig({
        imagemin: {                          // Task
            target: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }]
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.css'],
                    dest: 'dist/',
                    ext: '.css'
                }]
            }
        },

        htmlmin: {
            target: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: ['**/*.{html,htm}'],      // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        },

        uglify: {
            target: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: ['**/*.js'],              // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        },

        inline: {
            target: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: ['**/*.{html,htm}'],              // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        }
    });

    grunt.registerTask('default', [
        'imagemin',
        'inline',
        'uglify',
        'htmlmin',
        'cssmin'
    ]);


};