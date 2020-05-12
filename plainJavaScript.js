function zeroArray(m, n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
    row = [];
  }
  return newArray;
}

// let matrix = zeroArray(3, 2);
// console.log(matrix);

function mixedNumbers(arr) {
  // Only change code below this line
  const first = ["I", 2, "three"];
  const second = [7, "VIII", 9];
  for (let i = first.length - 1; i >= 0; i--) {
    arr.unshift(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    arr.push(second[i]);
  }
  // Only change code above this line
  return arr;
}

// console.log(mixedNumbers(["IV", 5, "six"]));

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
