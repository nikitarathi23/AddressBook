#!/usr/bin/env node
var Command = require('./command')

function handleResult(err) {
  if (err) {
    console.log('Error!')
  } else {
    console.log('OK!')
  }
}

switch(Command.getOperation()) {
  case 'add':
    return Command.add(handleResult)

  case 'find':
    return Command.find(handleResult)

  default:
    return console.log('Unknown command!')
}