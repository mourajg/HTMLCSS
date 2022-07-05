>>>
let lines = gets ().split ("\n");
var numberOfMatches = parseInt (lines.shift);
let n = parseInt (lines.shift ());
let totalMatches = 0;
while (n > 1) {
	if ((n % 2) == 0) {
		totalMatches = totalMatches + n / 2;
		n = n / 2;
	} else {
		totalMatches = totalMatches + ((n - 1) / 2 + 1);
		n = (n - 1) / 2;
	}
}
console.log(totalMatches);
>>>
