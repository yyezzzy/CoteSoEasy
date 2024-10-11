const a = [-1, 0, 1];
const b = [1, 0, -1];

function solution(a, b) {
  var answer = 0;
  a.forEach((v, i) => {
    answer += v * b[i];
  });
  return answer;
}

console.log(solution(a, b)); // 3
