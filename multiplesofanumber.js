//Given numbers x and n, where n is a power of 2, print out the smallest multiple of n which is greater than or equal to x. Do not use division or modulo operator.




function multiples(x,n) {
	var numberX = x;
	var numberN= n;
	var answer = 0;

	while (answer < numberX){
		answer = numberN + answer;
	} 

	console.log(answer);

}


multiples(17,16);