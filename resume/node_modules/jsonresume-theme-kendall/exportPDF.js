#!/usr/bin/env node

var theme = require('./index');
var fs = require('fs');
var page = require('webpage').create();

function exportHTML(inF, outF) {
    var json = fs.readFileSync(inF, "utf-8");
    var resumeObject = JSON.parse(json);
    var html = theme.render(resumeObject);
    page.open(html, function() {
        page.render(outF);
    });
}

var inputFN = process.argv[2];
var outputFN = process.argv[3];
exportPDF(inputFN, outputFN);
