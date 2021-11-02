function findLongestWord (str)  {
  var wordArr = str.split(' ');
  var maxWord = wordArr[0].length;
  var maxWordID = 0;
  for (let i = 0; i < wordArr.length; i++) {
    var currentWord = wordArr[i].length;
    if (currentWord > maxWord) {
      maxWord = currentWord;
      maxWordID = i;
    }
  }
  return wordArr[maxWordID];
};

console.log(findLongestWord("A AA AAA AAAA"));
console.log(findLongestWord("Write a JavaScript function that accepts a string as a parameter and find the longest word within the string"));