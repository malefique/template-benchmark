var nunjucks = require('nunjucks');
var fs = require('fs');
var compiled;
var tplData;

//nunjucks.configure(__dirname);
console.log(__dirname + '/tpl_escaped.nunjucks');

module.exports.prepare = function (data, done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.nunjucks', 'utf8');
    tplData = data;
	compiled = nunjucks.compile(str);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.nunjucks', 'utf8');
    tplData = data;
	compiled = nunjucks.compile(str);
	done();
};

module.exports.step = function (done) {
	var html = compiled.render(tplData);
	done(undefined, html);
};
