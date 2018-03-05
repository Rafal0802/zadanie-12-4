// script.js

var url = 'http://api.icndb.com/jokes/random',
    corsUrl = 'https://cors-anywhere.herokuapp.com/';

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
	getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', corsUrl + url);
	xhr.addEventListener('load', function(){
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}

getJoke();
