// npm - node package manager
var readlineSync = require('readline-sync');

var pet = {};

var name = readlineSync.question('Your pet name: ');
var gender = readlineSync.question('Pet gender (Male/Female): ');
var weight = readlineSync.question('Weight?: ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);

console.log(pet);