var hp = 24;

function solution(hp) {
  return (answer =
    Math.floor(hp / 5) +
    Math.floor((hp % 5) / 3) +
    Math.floor(((hp % 5) % 3) / 1));
}
console.log(solution(hp));
