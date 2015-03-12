deps:
	npm install
	mkdir public

static:
	./node_modules/.bin/browserify -r react -r ./blocks/page-main/page-main.js > public/index.js

run:
	node server
