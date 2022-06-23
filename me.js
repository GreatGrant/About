'use strict';
const ps = require('prompt-sync');
const prompt = ps();

let user_name = prompt("Enter your name: ");

let height = prompt("Enter your height (feet): ");

let country = prompt("Enter your country: ");

console.log(
  'My name is ' + user_name + 'I am from ' + country + 'I am ' + height + ' feet'
);

