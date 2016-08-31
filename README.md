##Enkelt oppsett med Grunt, Sass/Scss og Atomic Design i Visual Studio
Repoet viser et enkelt oppsett for å kjøre Grunt Task Runner som lytter på endringer i Scss-filene og bygger dem til en minimert CSS-fil.

Man kan bygge på ```gruntfile.js``` med flere oppgaver, som kompilering av TypeScript og lignende og det kommer kanskje noen commits på det senere.


###Gjelder Windows maskiner

Hvis man ikke har et oppsett med Ruby, Sass og Node installert fra før, følg stegene i rekkefølge:

1.	Installer Ruby http://rubyinstaller.org/downloads/ (Husk å huke av for at Ruby skal ligge i Path)
2.	Installer Ruby DevKit i samme versjon som for Ruby ovenfor: Last ned: http://rubyinstaller.org/downloads. Følg beskrivelse fra steg #4 herfra: https://github.com/oneclick/rubyinstaller/wiki/development-kit
2.	I command prompt, installer Sass: ``` gem install sass ```
3.	Installer Node: https://nodejs.org/
4.	Åpne Visual Studio og prosjektet og legg til en Grunt Configuration File i rot av prosjektet.
5.	I ``` package.json ``` legg til følgende:

```
 "name": "package",
 "version": "1.0.0",
 "private": true,
 "devDependencies": {
   "grunt": "0.4.5",
   "grunt-bower-task": "^0.4.0",
   "grunt-contrib-watch": "^0.6.1",
   "grunt-contrib-sass": "^0.9.2"
 }
}
```
Et forslag til ``` gruntfile.js ```
```
module.exports = function (grunt) {
    grunt.initConfig({
        sass: {     //Bygge-jobben som kjøres ved endringer
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [
                  {
                      expand: true,
                      cwd: 'Content/Scss', //Scss-filene ligger i denne strukturen
                      src: ["*.scss"],
                      dest: "Content/CSS", //Resultat av Scss-kompileringen havner her
                      ext: ".min.css" //Filen blir minimert
                  }
                ]
            }
        },
        watch: {  //Kjøres denne jobben så ligger den å lytter på endringer i Scss-filene og kjører så "sass" jobben ovenfor
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
```

###Kjør
- Når man skal sette i gang å bruke oppsette så må man høyreklikke på ```gruntfile.js``` og velge Task Runner Explorer. Man får dermed opp et lite vindu som viser jobbene som er definert i filen. I dette tilfellet ```watch``` og ```sass```.
- Førstnevnte lytter på endringer i scss-filene og bygger css automatisk. Sistnevnte bygger manuelt når man dobbelklikker på det.


###Tips ved feil:
Finne ut hvor Ruby og Sass ligger: I Ruby command prompt: ``` where ruby ``` og ``` where sass ```
Ruby og Sass må være i PATH: https://github.com/gruntjs/grunt-contrib-sass/issues/61


###Inspirasjon
Inspirasjon til oppsettet er hentet fra: http://www.gibedigital.com/blog/2015/may/28/compiling-sass-in-visual-studio-2015/
