// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const longestWord = (arr) => {
  let longestLength = 0

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i].length > longestLength) {
      let newStr = arr[i]
      longestLength = newStr.length
    }
  }

  return longestLength
}

console.log(longestWord(["hi", "hello", "longer"]))

// Time complexity ==> O(n)
// Space complexity ==> O(1)