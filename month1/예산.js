const d = [1, 3, 2, 5, 4];

function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget < d[i]) {
      break;
    }
    budget -= d[i];
    answer++;
  }
  return answer;
}

console.log(solution(d, 9));
