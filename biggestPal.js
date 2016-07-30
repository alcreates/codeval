
//largest prime palidrome less then 1000. 

//main function
function main() {
	var largest = null;
		for (var i = 0; i < 1000; i++) {
			if (isprime(i) && isPalindrome(i)) {
            	largest = i
        	}
    	}

    console.log(largest)
}


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


//finds out if number is a palindrome
function isPalindrome(num){
	var digitString = num.toString();
	var digits = digitString.split('');
	var digitLength = digits.length;
	
	for(var i = 0; i < digits.length; i++){
		if(digits[i] == digits[digitLength-1]){
			digitLength -= 1
		}else{
			return false
		}
	}
	 return true
	
}


main();







