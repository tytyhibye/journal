//   for (var i = 0; i < WordCount.length; i++)
//     if (str(i) === " ") { // if a space is found in str
//       totalSoFar = +1; // add 1 to total so far
//   }
//   totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
// }

// 1. method to return number of words in entry
// 2. method to return number of vowels/consenants in entry
// 3. call these methods to return values to front end upon submit
// 4. add method called getTeaser to display first sentence (or 8 words) upon submit
// 5. display results of methods in place of input form.

 export function wordCount(bodyText) { 
  return str.split(" ").length;
}