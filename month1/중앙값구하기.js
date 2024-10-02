const array = [9, -1, 0];

function solution(array) {
  var answer = 0;
  let sortedArray = array.sort((a, b) => a - b);
  let middleIndex = Math.floor(sortedArray.length / 2);
  answer = sortedArray[middleIndex];

  return answer;
}

solution(array);
ancelar;
