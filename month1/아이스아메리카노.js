const money = 5500;

function solution(money) {
  var answer = [];

  answer.push(Math.floor(money / 5500));
  answer.push(money % 5500);
  return answer;
}

solution(money);
