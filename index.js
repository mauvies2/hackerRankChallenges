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

// BOOLEAN PRIMITIVE => TO CONFIRM IS A VARIABLE IS A BOOLEAN
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

// EVERY FIRST LETTER OF A STRING TO UPPERCASE
function titleCase(str) {
  let strArr = [...str.toLowerCase()];
  strArr[0] = strArr[0].toUpperCase();
  console.log(strArr);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (strArr[i] === " ") {
      strArr[i + 1] = strArr[i + 1].toUpperCase();
    }
    result += strArr[i];
    result;
  }
  console.log(result);
  return result;
}

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
