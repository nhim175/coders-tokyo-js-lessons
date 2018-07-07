// if ... else if ... else
// Syntax:
// if (condition1) {
//  statement1;
// } else if (condition2) {
//  statement2;
// } else {
//  statement3;
// }
// Example: calculate bus ticket fee
// - if age < 15, discount 20%
// - if age > 60, discount 10%
// - otherwise 10000/ticket

function getTicketFee(person) {
  var basePrice = 10000;

  if (person.age < 15) {
    return 10000 * 0.8;
  } else if (person.age > 60) {
    return 10000 * 0.9;
  } else {
    return basePrice;
  }
}

var person = {
  age: 105
};
var fee = getTicketFee(person);
console.log(fee);