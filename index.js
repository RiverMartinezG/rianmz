#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: `Get to know River Martínez`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
})

console.log(`
River Martinez - Mid Wordpress Developer

rianmz cli package - Awesome cli tools for wordpresss.

🐦 Twitter: https://twitter.com/rianmz
`);