/// <binding Clean='watch:sass' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [
                  {
                      expand: true,
                      cwd: 'Content/Scss',
                      src: ["*.scss"],
                      dest: "Content/CSS",
                      ext: ".min.css"
                  }
                ]
            }
        },
        watch: {
            sass: {
                files: ["Content/**/*.scss"],
                tasks: ["sass"],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
};

