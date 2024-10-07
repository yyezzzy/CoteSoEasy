const x = -3;
const n = 3;

function solution(x, n) {
  var answer = [];
  for (let i = x; answer.length < n; i += x) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(x, n));
