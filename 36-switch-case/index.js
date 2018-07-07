// switch ... case
//
// Syntax:
// switch (expression) {
//  case value1:
//    // do something;
//    break;
//  case value2:
//    // do something;
//    break;
//  ...
//  default:
//    // do something;
//    break;
// }
// bronze, silver, gold, diamond
// discount:
// bronze: 2%
// silver: 5%
// gold: 8%
// diamond: 10%
var memberCard = {
  tier: 'silver'
};

function getTotal(price, card) {
  var discountRate;

  switch (card.tier) {
    case 'bronze':
      discountRate = 0.02;
      break;
    case 'silver':
      discountRate = 0.05;
      break;
    case 'gold':
      discountRate = 0.08;
      break;
    default:
      discountRate = 0.1;
      break;
  }

  // if (card.tier === 'bronze') {
  //   discountRate = 0.02;
  // } else if (card.tier === 'silver') {
  //   discountRate = 0.05;
  // } else if (card.tier === 'gold') {
  //   discountRate = 0.08;
  // } else {
  //   discountRate = 0.1;
  // }

  return price * (1 - discountRate);
}

var total = getTotal(500000, memberCard);
console.log(total);

// red, green, orange
var trafficLight = 'orange';

function goOrNotInVietnam(lightValue) {
  switch (lightValue) {
    case 'green':
    case 'orange':
      console.log('go');
      break;
    default:
      console.log('stop');
      break;
  }
}

goOrNotInVietnam(trafficLight);

// 1. List students
// 2. Create a new student
// 3. Save & Exit
// readline-sync







