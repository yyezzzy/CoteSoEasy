const left = 24;
const right = 27;

function solution(left, right) {
  let sum = 0;

  for (let num = left; num <= right; num++) {
    let count = 0;

    for (let divisor = 1; divisor <= num; divisor++) {
      if (num % divisor === 0) {
        count++;
      }
    }

    if (count % 2 === 0) {
      sum += num; // 약수의 개수가 짝수인 경우 더하기
    } else {
      sum -= num; // 약수의 개수가 홀수인 경우 빼기
    }
  }

  return sum;
}

console.log(solution(left, right));
