const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  var answer = [];

  for (let item = 0; item < commands.length; item++) {
    const [i, j, k] = commands[item]; // 구조 분해 할당으로 i, j, k 값을 가져옴

    // array를 i-1부터 j까지 자른 후 정렬하여 k번째 숫자를 찾음
    const sliced = array.slice(i - 1, j).sort((a, b) => a - b);

    // k번째 값은 1-based index이므로, k-1 위치의 값을 answer에 추가
    answer.push(sliced[k - 1]);
  }

  return answer;
}

console.log(solution(array, commands)); // [5, 6, 3]
