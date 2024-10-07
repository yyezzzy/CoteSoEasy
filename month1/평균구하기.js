const arr = [1, 2, 3, 4];

function solution(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(solution(arr));

// return array.reduce((a,b) => a+b) / array.length;
