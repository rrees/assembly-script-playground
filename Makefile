
.PHONY: build

build:
	npm run asbuild

test: build
	npm run test

collatz: build
	node tests/collatz.js

reverse: build
	node tests/reverse.js

squares: build
	node tests/sumSquares.js

leap: build
	node tests/leap.js

triangle: build
	node tests/triangle.js

darts: build
	node tests/darts.js