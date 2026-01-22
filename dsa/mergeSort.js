function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = [];
  let right = [];
  for (let i = 0; i < mid; i++) {
    left.push(arr[i]);
  }
  for (let i = mid; i < arr.length; i++) {
    right.push(arr[i]);
  }
  return mergeSortHelper(mergeSort(left), mergeSort(right));
}
function mergeSortHelper(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  console.log(result);
  return result;
}
// Test
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
