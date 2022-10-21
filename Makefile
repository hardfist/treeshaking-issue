esbuild:
	@esbuild src/index.js --bundle 
esbuild-minify:
	@esbuild src/index.js --bundle  --minify
webpack-dev: 
	@webpack ./src/index.js --mode=development
webpack-build:
	@webpack ./src/index.js --mode=production