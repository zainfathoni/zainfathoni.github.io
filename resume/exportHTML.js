#!/usr/bin/env node

var theme = require('./index');
var fs = require('fs');

function exportHTML(inF, outF) {
    var json = fs.readFileSync(inF, "utf-8");
    var resumeObject = JSON.parse(json);
    var html = theme.render(resumeObject);
    fs.appendFileSync(outF, html);
}

var inputFN = process.argv[2];
var outputFN = process.argv[3];
exportHTML(inputFN, outputFN);
