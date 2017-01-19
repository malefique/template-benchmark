# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.8 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Gaikan](https://github.com/Deathspike/gaikan) v1.3.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))

## Test environment

- CPU: Intel Core i5 450M 2.4Ghz
- OS: Ubuntu Server 12.04
- Node.JS version: 0.8.21

## Results

	Rendering 100000 templates:
    
    Nunjucks
      Escaped   : 2982ms
      Unescaped : 1173ms
      Total     : 4155ms
    
    ECT
      Escaped   : 1476ms
      Unescaped : 88ms
      Total     : 1564ms
    
    Dust
      Escaped   : 1883ms
      Unescaped : 357ms
      Total     : 2240ms
    
    Hogan.js
      Escaped   : 1883ms
      Unescaped : 342ms
      Total     : 2225ms
    
    Gaikan
      Escaped   : 1654ms
      Unescaped : 55ms
      Total     : 1709ms
    
    Fest
      Escaped   : 1642ms
      Unescaped : 238ms
      Total     : 1880ms
    
    EJS without `with`
      Escaped   : 3289ms
      Unescaped : 440ms
      Total     : 3729ms
    
    doT
      Escaped   : 2137ms
      Unescaped : 71ms
      Total     : 2208ms
    
    Swig
      Escaped   : 3691ms
      Unescaped : 263ms
      Total     : 3954ms
    
    Underscore
      Escaped   : 1909ms
      Unescaped : 1138ms
      Total     : 3047ms
    
    EJS
      Escaped   : 5624ms
      Unescaped : 2293ms
      Total     : 7917ms
    
    Eco
      Escaped   : 4483ms
      Unescaped : 661ms
      Total     : 5144ms
    
    Handlebars.js
      Escaped   : 4371ms
      Unescaped : 2763ms
      Total     : 7134ms
    
    Jade without `with`
      Escaped   : 5044ms
      Unescaped : 1226ms
      Total     : 6270ms
    
    CoffeeKup
      Escaped   : 2688ms
      Unescaped : 5505ms
      Total     : 8193ms
    
    Jade
      Escaped   : 10943ms
      Unescaped : 8044ms
      Total     : 18987ms

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
