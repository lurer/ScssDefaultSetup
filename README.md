##Midlertidig fremgangsmåte for å gå frem :)
###Gjelder Windows maskiner

Hvis man ikke har et oppsett med Ruby, Sass og Node installert fra før følg stegene i rekkefølge:

1.	Installer Ruby http://rubyinstaller.org/downloads/
2.	Følg oppskrift: http://www.gibedigital.com/blog/2015/may/28/compiling-sass-in-visual-studio-2015/
3.	Installer Ruby DevKit: https://github.com/gruntjs/grunt-contrib-sass/issues/71
```
1.	sass: {
2.	  dist: {
3.	    options: {
4.	      style:'compressed'
5.	    },
6.	    files: [
7.	      {
8.	        expand: true,
9.		cwd: 'Content/scss',
10.		src: ["*.scss"],
11.		dest: "Content/css",
12.		ext: ".min.css"
13.	      }
14.	    ]
15.	  }
16.	},
17.	watch: {
18.	  sass: {
19.	    files: ["**/*.scss"],
20.	    tasks: ["sass"],
21.	    options: {
22.	      livereload: true
23.	    }
24.	  }
25.	}
```
###Tips ved feil:
Finne ut hvor Ruby og Sass ligger: I Ruby command: where ruby | where sass
Ruby og Sass må være i PATH: https://github.com/gruntjs/grunt-contrib-sass/issues/61
