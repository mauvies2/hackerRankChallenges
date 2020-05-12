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

function largestOfFour(arr) {
  let maxNum = 0;
  let result = [];
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    let maxNum = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] > maxNum && (maxNum = arr[i][j]);
    }
    result.push(maxNum);
  }
  console.log(result);
  return result;
}

function largestOfFour(arr) {
  let newArr = arr.map((arrInt) => Math.max(...arrInt));
  return newArr;
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
  let result = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      result += str;
    }
  }
  return result;
}

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
