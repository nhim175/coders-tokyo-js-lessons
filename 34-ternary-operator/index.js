// ternary operator
//
// Syntax:
// condition ? expression when true : expression when false
function tossCoin() {
  var value = Math.random();
  var result = (value < 0.5) ? 'Mặt sấp' : 'Mặt ngửa';

  // if (value < 0.5) {
  //   result = 'Mặt sấp';
  // } else {
  //   result = 'Mặt ngửa';
  // }

  console.log(result);
}

tossCoin();
