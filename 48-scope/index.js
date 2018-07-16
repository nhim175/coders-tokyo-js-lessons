// scope
// 1. Global scope
// 2. Local scope
// when a function is executed -> create a new scope
var a = 1;
var b = 2;

function random(x) {
  var b = Math.random();
  console.log(b * x);
}

function doSomething() {
  a = 5;
}

var y = random(a);