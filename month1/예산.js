const d = [1, 3, 2, 5, 4];

function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b);

  d.some((v) => {
    if (budget < v) {
      return true; // 이 조건이 true이면 반복을 중단
    }
    budget -= v;
    answer++;
    return false; // 반복 계속
  });

  console.log(budget);
  return answer;
}

console.log(solution(d, 9));
