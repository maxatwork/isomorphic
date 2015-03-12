deps:
	npm install
	mkdir public

static:
	./node_modules/.bin/browserify -r react ./blocks/page-main/page-main.js > public/page-main.js

run:
	node server
