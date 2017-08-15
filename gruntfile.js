module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
		sass: {
       		options: {
      			sourceMap: true
      		},
      		dist: {
        		files: {
          		    'css/main.css': 'sass/main.sass'
                }
            }
        },
		imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },
		watch: {
            scripts: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },
		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        },
		concat: {
            options: { "separator": ";" },
            build: {
                src: ["js/file1.js", "js/file2.js"],
                dest: "js/app.js"
            }
        }
    });

    // Load required modules
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definitions
	grunt.registerTask('default', ['sass']);
	grunt.registerTask('default', ['imagemin']);
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('default', ['browserSync']);
    grunt.registerTask('default', ['concat']);
	
};