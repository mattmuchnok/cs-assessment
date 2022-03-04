// Write a function that takes in an array of numbers.
// The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = (arr) => {
  for (let i = 0; i < arr.length-1; i++) {
    let num1 = arr[i]

    for (let j = 1; i< arr.length-1; j++){
      let num2 = arr[j]

      if (num1 - num2 === 0) {
        return true
      }
    }
  }

  return false
}

console.log(addToZero([])) // false
// console.log(addToZero([1])) // false
// console.log(addToZero([1, 2, 3])) // false
console.log(addToZero([1, 2, 3, -2])) // true