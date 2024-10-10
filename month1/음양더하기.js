const absolutes = [4, 7, 12];
const signs = [true, false, true];

function solution(absolutes, signs) {
  const arr = absolutes.map((num, idx) => (signs[idx] ? num : -num));
  return arr.reduce((acc, cur) => acc + cur);
}

console.log(solution(absolutes, signs)); // [4, -7, 12];
