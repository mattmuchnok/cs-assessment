// Write a function that takes in an array of numbers.
// The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++){
      if (i != j && arr[i] + arr[j] === 0) {
        return true
      }
    }
  }
  return false
}

// console.log(addToZero([])) // false
// console.log(addToZero([1])) // false
// console.log(addToZero([1, 2, 3])) // false
console.log(addToZero([1, 2, 3, -2])) // true

// Time complexity ==> O(n^2)
// Space complexity ==> O(1)