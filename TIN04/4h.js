function findSecondLowestHighest (arr) {
	arr = arr.sort(function(a, b) {
  	return a - b;
	});
    if (arr.length == 1) {
    	return [arr[0], arr[0]];
  	} 
 	else {
 		return [arr[1], arr[arr.length - 2]];
 	}
};

console.log(findSecondLowestHighest([33, 44, 55, 66, 77]));
console.log(findSecondLowestHighest([6, 7, 35, 23, 11]));