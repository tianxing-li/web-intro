var myHeading = document.querySelector('h1');
//this is a comment.
myHeading.textContent = 'Hello world!';

/*
Everything in between is a comment.
*/

var age = 17;
if (age >= 18){
	alert('That is logic!');
} else {
	alert('OMG, you are under 18, you should watch this with your parents company!!!');
}

function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}

document.querySelector('h1').onclick = function() {
	alert('Oooo! Stop poking me!!!!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/nvvlogo.jpg'){
		myImage.setAttribute('src', 'images/nvvlogo2.jpg');
	} else {
		myImage.setAttribute('src', 'images/nvvlogo.jpg');
	}
}

var myButton = document.querySelector('button');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Wish you happy, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Nice2see you again, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}