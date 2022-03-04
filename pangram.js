// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (str) => {
   str = str.toLowerCase()
   const { length } = str
   const alphabets = 'abcdefghijklmnopqrstuvwxyz'
   const alphaArr = alphabets.split('')
   for(let i = 0; i < length; i++){
      const el = str[i]
      const index = alphaArr.indexOf(el)
      if(index !== -1){
         alphaArr.splice(index, 1)
      }
   }
   return !alphaArr.length
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!")) // -> True
// console.log(isPangram("I like cats, but not mice")) // -> False

// Time complexity ==> O(n)
// Space complexity ==> O(1)