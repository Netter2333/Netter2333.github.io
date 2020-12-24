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

const list = document.createElement('ul');
list.setAttribute('id', 'Ul2');
const info = document.createElement('p');
const html = document.querySelector('html');
const listquery = document.querySelector('#Ul2');

info.textContent =
	'Below is a dynamic list. Click the list above to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

listquery.onclick = function () {
	const listItem = document.createElement('li');
	const listContent = prompt('What do you like about PACMAN?');
	if (!listContent) {
		alert('Invalid input');
	} else {
		listItem.textContent = listContent;
		list.appendChild(listItem);

		listItem.onclick = function (e) {
			e.stopPropagation();
			const listContent = prompt('Enter new content for your list item');
			if (!listContent) {
				alert('Invalid input');
			} else {
				this.textContent = listContent;
			}
		};
	}
};
