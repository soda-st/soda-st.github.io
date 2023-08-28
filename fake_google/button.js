const button = document.getElementById('fakeButton');
const fakeText = document.getElementById('fakeTextarea');
let url = 'https://www.google.co.jp/search?q=';

button.addEventListener('click', function() {
	window.open(url + fakeText.value);	
}, false);