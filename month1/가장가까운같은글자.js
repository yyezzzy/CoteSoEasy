s = 'banana';

function solution(s) {
  var answer = [];
  var temp = [];

  for (let i = 0; i < s.length; i++) {
    if (!temp.includes(s[i])) {
      answer.push(-1);
      temp.push(s[i]);
    } else {
      answer.push(i - temp.lastIndexOf(s[i]));
      temp.push(s[i]);
      console.log('answer', answer);
      console.log('temp', temp);
    }
  }
  return answer;
}

console.log(solution(s));
