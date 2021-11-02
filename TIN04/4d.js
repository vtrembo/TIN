function alphabeticalOrder (text) {
  return text.toLowerCase().split('').sort().join('');
};
console.log(`Ordered value: ${alphabeticalOrder("webmaster")}`);