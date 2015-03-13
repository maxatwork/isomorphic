deps:
	npm install
	mkdir public

static:
	./node_modules/.bin/enb make --no-cache

run:
	node server
