function palindrome(text){
    var lowerText = text.toLowerCase();
    var reverseText = lowerText.split('').reverse().join('');
    return lowerText === reverseText;
}
console.log(`Is level a palindrome? ${palindrome("Level")}`);
console.log(`Is civic a palindrome? ${palindrome("civic")}`);
console.log(`Is palindrome a palindrome? ${palindrome("palindrome")}`);