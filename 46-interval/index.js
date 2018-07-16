// setInterval
// clearInterval
// setInterval(fn, ms);
var i = 0;
var intervalId = setInterval(function() {
  ++i;
  console.log(i);
  if (i === 5) {
    clearInterval(intervalId);
  }
}, 1000);

// Write a function count from 1 to 10
// return a promise
function countFrom(a, b) {
  // ??
}

countFrom(1, 10).then(function() {
  console.log('Done');
});