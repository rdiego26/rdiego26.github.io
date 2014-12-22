/**
 * Created by ramos on 14/11/14.
 */
/**
 * Created by ramos on 02/11/14.
 */
module.exports = function(grunt) {
    grunt.initConfig({


        copy: {
            main: {
                files: [
                    {expand:true, src:['css/**'], dest: 'build/', filter: 'isFile'},
                    {expand:true, src:['img/**'], dest: 'build/', filter: 'isFile'},
                    {expand:true, src:['js/**'],  dest: 'build/',  filter: 'isFile'},
                    {expand:true, src:['icons/**'],  dest: 'build/',  filter: 'isFile'},
                    {expand:true, src:['bootstrap/**'],  dest: 'build/',  filter: 'isFile'}
                ]
            }
        },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    $: true,
                    console: true
                }
            }
        },

        uglify: {
            'build/js/custom.js': 'js/custom.js'
        },

        cssmin: {
            my_target: {
                files: {
                    'build/css/animate.css': ['build/css/animate.css'],
                    'build/css/flexslider.css': ['build/css/flexslider.css'],
                    'build/css/style.css': ['build/css/style.css']
                }                
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'index.html'
                }
            }
        }


    });

    // carrega plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['copy', 'jshint', 'uglify', 'cssmin', 'htmlmin']);

};
