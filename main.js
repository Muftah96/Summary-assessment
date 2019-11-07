document.getElementById('btn').onclick = function () {
	// body...
var firstInput = document.getElementById('input-one');
var socendInput = document.getElementById('input-two');

var unorderd = document.getElementById('unorderd');
if (socendInput === 'red' || socendInput === 'yellow' || socendInput === 'blue') {

	firstInput.add(socendInput);
unorderd = document.createElement("li");
	unorderd.append(firstInput)
}

}
// the idea is giting the elemints from the first then change there class then put thim in the unorderd list
// using Jquary would have been more easier 