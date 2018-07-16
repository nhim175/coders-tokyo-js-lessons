// Date
// moment.js
var moment = require('moment');

// var now = new Date();
// var myBirthday = new Date(1990, 4, 17); // 17-5-1990

// // number of milliseconds from 1-1-1970 +7 +9
// console.log(now.getTime());
// console.log(myBirthday.getTime());

var now = moment('2018-07-10 00:00');
console.log(now.format('YYYY/MM/DD'));