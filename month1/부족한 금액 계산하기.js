var price = 3;
var money = 20;
var count = 4;

function solution(price, money, count) {
  var sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return sum - money;
}

console.log(solution(price, money, count)); // result
