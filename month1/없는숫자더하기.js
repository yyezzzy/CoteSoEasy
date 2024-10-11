const numbers = [5, 8, 4, 0, 6, 7, 9];

function solution(numbers) {
  let result = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      result += i;
    }
  }
  return result;
}

console.log(solution(numbers)); // 5
