#dist
browserify -t [ babelify --presets [ es2015 ] ] ./../src/api.js -o ./../dist/api.js
