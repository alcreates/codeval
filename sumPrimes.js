//Sum of the first 1000 prime numbers 

//finds out if numnber is prime
function isprime(num){
		
		if(num <= 1){
			return false
		}
	 	if(num == 2){
	 		return true
	 	}

	 	for(var i = 2; i < num; i++ ){
	 		if(num % i == 0){
	 			return false
	 		}
	 	}
	 	return true 
}

//Sums up the primes
function sumPrimes(){
	var sumOfPrimes = null;
	var count = 1000;
	for (var i = 1; count > 0; i++) {
		if(isprime(i)){
			count -= 1;
			sumOfPrimes += i;
		}
	}

	console.log(sumOfPrimes);
}


sumPrimes();
