// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    if (currency/50 >=1){
  		var H=currency/50|0;
  		var ost1=currency%50;
  		if (ost1!=0){
  			var Q=ost1/25|0;
  			var ost2=ost1%25;
  			if (ost2!=0){
  				var D=ost2/10|0;
  				var ost3=ost2%10;
  				if (ost3!=0){
  					var N=ost3/5|0;
  					ost4=ost3%5;
  					if (ost4!=0){
  						var P=ost4;
  					}
  					else{
  						P=0;
  					}
  				}
  				else{
  					N=0;
  				}
  			}
  			else{
  				D=0;
  			}
  		}
  		else{
  			Q=0;
  		}
  	}
  	else{
  		H=0;
  	}
    // Return an object containing the minimum number of coins needed to make change

}
