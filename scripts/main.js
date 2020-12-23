let myHeading = document.querySelector('h1');
myHeading.textContent = 'PACMAN Fan Website';

alert('Welcome to my first website!'); // alerta de bienvenida al cargar el sitio.

let myImage = document.querySelector('img');

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/622070_pacman.jpg') {
		myImage.setAttribute('src', 'images/Pac-Man-0.png');
		alert('Easter egg!');
	} else {
		myImage.setAttribute('src', 'images/622070_pacman.jpg');
	}
};

let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1')
function setUserName() {
	let myName = prompt('Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'PACMAN is cool, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'PACMAN is cool, ' + storedName;
}

myButton.onclick = function () {
	setUserName();
};
