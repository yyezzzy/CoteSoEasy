const arr = [1, 1, 3, 3, 0, 1, 1];

function solution(arr) {
  const answer = [];
  arr.forEach((v, i) => {
    if (v !== arr[i - 1]) {
      answer.push(v);
    }
  });
  return answer;
}

console.log(solution(arr));
