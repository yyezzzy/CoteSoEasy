const array = [149, 180, 190, 170];

function solution(array, height) {
  let answer = array.filter((item) => item > height);
  return answer.length;
}

solution(array);
