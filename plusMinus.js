function plusMinus(arr) {
  let pnz = [0, 0, 0];
  let len = arr.pnz;
  arr.map((n) => {
    if (n > 0) {
      pnz[0]++;
    } else if (n < 0) {
      pnz[1]++;
    } else {
      pnz[2]++;
    }
  });
  for (let i = 0; i < pnz.length; i++) {
    console.log((pnz[i] / arr.length).toFixed(6));
  }
  return pnz;
}
plusMinus([-4, 3, -9, 0, 4, 1]);
