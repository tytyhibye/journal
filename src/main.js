// function WordCount(str) {
//   var totalSoFar = 0;
//   for (var i = 0; i < WordCount.length; i++)
//     if (str(i) === " ") { // if a space is found in str
//       totalSoFar = +1; // add 1 to total so far
//   }
//   totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
// }

// 1. method to return number of words in entry
// 2. method to return number of vowels/consenants in entry
// 3. 

function WordCount(str) { 
  return str.split(" ").length;
}