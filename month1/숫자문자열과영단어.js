const s = "one4seveneight";

function solution(s) {
  const numberArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numberArr.forEach((word, idx) => {
    s = s.split(word).join(idx);
  });
  return Number(s);
}

console.log(solution("one4seveneight")); // 1478
