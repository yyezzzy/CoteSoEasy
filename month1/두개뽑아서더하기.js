const numbers = [2, 1, 3, 4, 1];

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = Array.from(new Set(answer));
  answer.sort((a, b) => a - b);
  return answer;
}

console.log(solution(numbers)); // [2, 3, 4, 5, 6, 7]
