esbuild:
	@esbuild src/index.js --bundle 
esbuild-minify:
	@esbuild src/index.js --bundle  --minify
webpack-dev: 
	@webpack ./src/index.js -c webpack.dev.js
webpack-build:
	@webpack ./src/index.js -c webpack.build.js