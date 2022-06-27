function StringChallenge(str) {
  // code goes here
  let charToDelete = ''
  let newStr = ''
  let isPossible = true

  const possiblePalindrome = (str) => {
    let left = 0
    let right = str.length - 1

    if (str.length < 3) {
      return (isPossible = false)
    }
    while (left < right) {
      if (str[left] !== str[right]) {
        if (str[left + 1] === str[right]) {
          charToDelete = charToDelete + str[left]
          newStr = str.slice(0, left) + str.slice(left + 1)
          return possiblePalindrome(newStr)
        } else if (str[left] === str[right - 1]) {
          charToDelete = charToDelete + str[right]
          newStr = str.slice(0, right) + str.slice(right + 1)
          return possiblePalindrome(newStr)
        } else {
          charToDelete = charToDelete + str[left]
          newStr = str.slice(0, left) + str.slice(left + 1)
          return possiblePalindrome(newStr)
        }
      }
      left++
      right--
    }
  }

  possiblePalindrome(str)
  if (isPossible) return charToDelete

  return 'not possible'
}
// keep this function call here
console.log(StringChallenge('lieuvrel'))
