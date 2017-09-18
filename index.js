#!/usr/bin/env node

const checker = require('./checker')()

process.stdin.setEncoding('utf8')
let flowOutput = ''
process.stdin.on('data', (stdout) => flowOutput += stdout)
process.on('exit', () => checker({ stdout: flowOutput }))

