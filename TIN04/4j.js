function binarySearch (number, arr, firstElement = 0, lastElement = arr.length - 1) {
  const middleElement = Math.floor((firstElement + lastElement) / 2);
  if (arr[middleElement] === number) {
    return middleElement;
  } 
  else if (firstElement >= lastElement) {
    return "Not found";
  }
  else  if (number < arr[middleElement]) {
    return binarySearch(number, arr, firstElement, middleElement - 1);
  }
  else {
  	return binarySearch(number, arr, middleElement + 1, lastElement);
  }
};

console.log(binarySearch(7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));