const n = 12;

function solution(n) {
  var sum = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) sum += i;
    else continue;
  }
  return sum;
}

console.log(solution(n));
