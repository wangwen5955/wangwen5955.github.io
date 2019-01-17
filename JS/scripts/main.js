var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//document.querySelector('html').onclick = function() {alert('Ouch! Stop poking me!');}

var myImage=document.querySelector('img');
myImage.onclick=function(){
    mySrc = myImage.getAttribute('src');
    if (mySrc === "imgas/box-model.png"){
        myImage.setAttribute('src', "imgas/hello-world.png");
    }else{
        myImage.setAttribute('src',"imgas/box-model.png")
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}