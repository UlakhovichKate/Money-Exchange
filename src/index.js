// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    var results = new Object();
    if (currency>10000)	{
		results.error="You are rich, my friend! We don't have so much coins for exchange";
		return results;
	}
    
  		var H=currency/50|0;
  		var ost1=currency%50;
        if (currency/50 !=0){
            results.H=H;
        }
  		var Q=ost1/25|0;
  		var ost2=ost1%25;
        if (ost1!=0){
            results.Q=Q;
        }
  		var D=ost2/10|0;
  		var ost3=ost2%10;
        if (ost2!=0){
            results.D=D;
        }
  		var N=ost3/5|0;
  		ost4=ost3%5;
        if (ost3!=0){
            result.N=N;
        }
  		var P=ost4;
        if (ost4!=0){
            results.P=P;
        }
  		
    // Return an object containing the minimum number of coins needed to make change
    return results;
}
