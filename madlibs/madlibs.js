// Make a JavaScript object for the HTML submit button
var submitButton = document.getElementById('submit');

// When submit button is clicked, run the showMadLib function
submitButton.addEventListener('click', showMadLib);

function showMadLib() {
	// Get the values of HTML input boxes
	// with the IDs "noun", "verb", and "adjective"
	var noun = document.getElementById('noun').value;
	var verb = document.getElementById('verb').value;
	var adjective = document.getElementById('adjective').value;

	// For testing purposes, display the values in the console
	console.log(noun, verb, adjective);

	// Make the Mad Lib and save it to a variable
	var madLib = createMadLib(noun, verb, adjective);

	// Make a JavaScript object for the HTML element with id "madlib"...
	var madLibContainer = document.getElementById('madlib');

	// ...and change its contents to contain our madLib string, turning the string into HTML
	madLibContainer.innerHTML = madLib;
}

function createMadLib(noun, verb, adjective) {
	return 'Bob robbed the bank with a deadly <span class="fill">' + noun + '</span>, but then his <span class="fill">' + adjective + '</span> girlfriend <span class="fill">' + verb + '</span> the cash!';
}
