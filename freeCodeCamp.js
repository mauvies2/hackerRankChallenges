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

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );

// FIND THE LONGEST WORD IN A STRING
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// RETURN AN ARRAY WITH THE LARGEST NUMBER OF EACH NESTED-ARRAY
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

// TARGET A PATTERN AT THE END OF THE STRING
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// REPEAT STRING NUMBERS (NUM) OF TIMES
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

// FIND ELEMENT IN A STRING THAT MEETS CONDITIONS
function findElement(arr, func) {
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
  return num;
}

function findElement(arr, func) {
  return arr.find(func);
}
// PRIME
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0);

// FIND INDEX OF ELEMENT num IN ARR WHEN SORTED
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((x, y) => x - y);
  return arr.indexOf(num);
}

getIndexToIns([2, 5, 10], 15);

// THE FIRTS ELEMENT OF THE ARRAY CONTAINS ALL OF THE LETTERS
// OF THE STRING IN THE SECOND ELEMENT OF THE ARRAY
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

function mutation([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
    ? false
    : mutation([target, test], i + 1);
}

function chunkArrayInGroups(arr, size) {
  let result = [];
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i]);
    if ((i + 1) % size === 0) {
      result.push(array);
      array = [];
    }
  }
  if (array.length > 0) {
    result.push(array);
  }
  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

function staircase(n) {
  for (let i = 0; i < n; i++) {
    let draw = "";
    let spaces = "";
    for (let j = n; j > 0; j--) {
      j > i + 1 ? (spaces += " ") : (draw += "#");
    }
    console.log(spaces + draw);
  }
}

// staircase(4);

function miniMaxSum(arr) {
  arr.sort();
  let result = arr.reduce((a, b) => a + b);
  console.log(`${result - arr[arr.length - 1]} ${result - arr[0]}`);
}

// miniMaxSum([1, 3, 2, 4, 5]);

function birthdayCakeCandles(ar) {
  let counter = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === arr[arr.length - 1]) {
      counter++;
    }
  }
  console.log(counter);
  return counter;
}

// birthdayCakeCandles(`3 1 2 3 3`);

function gradingStudents(grades) {
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] > 37 && grades[i] % 5 >= 3) {
      console.log(grades[i]);
      grades[i] += 5 - (grades[i] % 5);
    }
  }
  return grades;
}

gradingStudents([73, 67, 38, 33]);
