function convertToCoins (money, coins) {
  coins = coins.sort(function(a, b) {
  	return a - b;
	});
  var convertedCoins = [];
  for (let i = coins.length; i >= 0; i--) {
    while (money >= coins[i]) {
      convertedCoins.push(coins[i]);
      money -= coins[i];
    }
  }
  return convertedCoins;
};

console.log(`Here 46 is the amount. and ${convertToCoins(46, [25, 10, 5, 2, 1])} are coins. `);