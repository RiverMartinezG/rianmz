#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;

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

log(`${chalk.bgBlue.bold(` River Martinez `)} - Mid Wordpress Developer

${chalk.italic('rianmz cli package - Awesome cli tools for wordpresss.')}

🐦 ${chalk.hex('#1da1f2').bold('Twitter')}: ${chalk.dim('https://twitter.com/rianmz')}
`);