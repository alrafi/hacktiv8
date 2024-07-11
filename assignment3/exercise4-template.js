/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(arr) {
  // your code here
  let maxAll = arr[0];
  let tmpMax = arr[0];
  let start = 0,
    end = 0,
    s = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > tmpMax + arr[i]) {
      tmpMax = arr[i];
      s = i;
    } else {
      tmpMax += arr[i];
    }

    if (tmpMax > maxAll) {
      maxAll = tmpMax;
      start = s;
      end = i;
    }
  }

  return [arr.slice(start, end + 1), maxAll];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
