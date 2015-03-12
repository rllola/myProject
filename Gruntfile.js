module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
    		js: {
    			files: ['<%= jshint.dev.src %>'],
    			tasks: ['jshint']
    		},
    		livereload: {
    			options: {
    				livereload: '<%= connect.options.livereload %>'
    			},
    			files: ['app/**/*']
			},
			css: {
				files: 'app/assets/styles/*.scss',
				tasks: ['compass']
			}
  		},

        // Verify code style. Also add the Sublime Text package Jshint Gutter
        jshint: {
            // Give the configuration file that tell what to verify or not ...
            options: {
                jshintrc: '.jshintrc'
            },
            //Files to check use for application (No test yet)
            dev: {        
                src: ['/app/features/**/*.js','/app/shared/**/*.js']
            }
        },
        connect: {
        	options: {
        		port: 9000,
	        	// Change this to '0.0.0.0' to access the server from outside.
	        	hostname: '0.0.0.0',
	        	livereload: 35729
	   		},
		    livereload: {
		    	options: {
		    		open: true,
		    		base : 'app'
		    	}
		    }
        },
        compass: {                 
		    dev: {                    
		    	options: {
		    		sassDir: 'app/assets/styles',
		    		cssDir: 'app/assets/styles',
		    		require: 'bootstrap-sass'
		    	}
		    }
		},
	    wiredep: {
	    	app: {
	    		src: ['app/index.html'],
	    		ignorePath:  /\.\.\//
	    	},
		},
        // Configuration of Karma framework for running test. See also test/karma.conf.js file for details
        // Only for unit test (which is really limited)
        // For end-to-end test use Protactor for AngularJS (no grunt yet...)
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-karma');

    // grunt go : start the sever for dev purpose
    grunt.registerTask('go', [
        'compass',
        'wiredep',
        'jshint',
        'connect:livereload',
        'watch'
    ]);

    // grunt test : do all the test specify. To be run in travis at each git push
    grunt.registerTask('test', [
        'compass',
        'wiredep',
        'jshint',
        'karma'
    ]);

    // grunt : Does nothing this useless. Maybe at one point we can add something... don't know you tell me.
    grunt.registerTask('default', []);
};