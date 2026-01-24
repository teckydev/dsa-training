function removeElement(arr, val) {
  let slow = 0;

  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== val) {
      arr[slow] = arr[fast];
      slow++;
    }
  }

  return slow;
}

// Test
let arr = [3, 2, 2, 3];
let k = removeElement(arr, 3);

console.log(k);               // 2
console.log(arr.slice(0, k)); // [2, 2]