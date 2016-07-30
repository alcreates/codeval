function reverseWords(arg){
	var words = arg.split(' ');
	var newSentence = [];
	var wordsLength = words.length -1;
	for (var i = 0; i < words.length; i++) {
		
		newSentence.push(words[wordsLength])
		wordsLength -= 1

	}
	
	console.log(newSentence.join(' '));
}


reverseWords('I love hotdogs 100');