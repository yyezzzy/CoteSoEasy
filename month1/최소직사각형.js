const size = [
  [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ],
  [
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ],
  [
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ],
];

function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach((pair, i) => {
    console.log(`Pair ${i + 1}:`, pair);
    const [w, h] = pair;
    const maxSize = Math.max(w, h);
    const minSize = Math.min(w, h);

    maxWidth = Math.max(maxWidth, maxSize);
    maxHeight = Math.max(maxHeight, minSize);
  });

  return maxWidth * maxHeight;
}

console.log(solution(size[0])); // 480
