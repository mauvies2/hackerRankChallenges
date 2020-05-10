function diagonalDifference(input) {
  let len = arr.length;

  dia1 = 0;
  dia2 = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i == j) {
        dia1 += arr[i][j];
      }
      if (len - 1 - j == i) {
        dia2 += arr[i][j];
      }
    }
  }
  return Math.abs(dia1 - dia2);
}
const arr = [
  [11, 2, 4, 1],
  [4, 5, 6, 1],
  [10, 8, -12, 1],
  [1, 1, 1, 1],
];
console.log(diagonalDifference(arr));
