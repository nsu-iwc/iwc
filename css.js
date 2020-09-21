const purify = require("purify-css");

var content = ['*.html'];
var css = ['*.css'];

var options = {
    output: './dist/purified.css'
};

purify(content, css, options);
