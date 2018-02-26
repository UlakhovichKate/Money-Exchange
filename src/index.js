// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    var results = new Object();
    if (currency>10000)	{
		results.error="You are rich, my friend! We don't have so much coins for exchange";
		return results;
	}
    if (currency<=0){
	return results;
	}
  		var H=currency/50|0;
  		var currency=currency%50;
        if (H!=0){
            results.H=H;
        }
  		var Q=currency/25|0;
  		var currency=currency%25;
        if (Q!=0){
            results.Q=Q;
        }
  		var D=currency/10|0;
  		var currency=currency%10;
        if (D!=0){
            results.D=D;
        }
  		var N=currency/5|0;
			currency=currency%5;
        if (N!=0){
            results.N=N;
        }
  		var P=currency%5;
        if (P!=0){
            results.P=P;
        }
  		
    // Return an object containing the minimum number of coins needed to make change
    return results;
}
