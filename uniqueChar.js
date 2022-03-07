// Write a function that takes in a single word, as a string.
// It should return True if that word contains only unique characters. Return False otherwise.

function findUnique(str) {
  let uniq = ""
  let isUnique = false;

  for (let i = 0; i < str.length; i++) {
    if (uniq.includes(str[i]) === false) {
      uniq += str[i]
      // console.log(str[i])
      isUnique = true;
      // console.log(isUnique)
    } else if (uniq.includes(str[i]) === true) {
      uniq += str[i]
      // console.log(str[i])
      isUnique = false;
      // console.log(isUnique)
      break
    }
  }
  return isUnique
}

console.log(findUnique(`Monday`)) // true
// console.log(findUnique(`Moonday`)) // false

// Time complexity ==> O(n^2)
// Space complexity ==> O(1)