const n = 45;

function solution(n) {
  // n을 3진법으로 변환하여 문자열로 저장
  var answer = n.toString(3);

  // 문자열을 배열로 변환한 후 reverse()로 뒤집고 다시 문자열로 결합
  const reversed = answer.split('').reverse().join('');

  // 뒤집은 결과를 다시 10진법 정수로 변환
  const result = parseInt(reversed, 3); //(3진법 문자열을 10진법 숫자로 변환)
  // const result = reversed.toString(3); // "0021" (문자열이 그대로 반환됨)

  return result;
}

console.log(solution(n));
