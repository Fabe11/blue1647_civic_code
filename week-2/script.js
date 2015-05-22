// Guessing Game I

var computerNumber = Math.floor((Math.random() *50) + 1);
console.log(computerNumber)

var userNumber = prompt("Please guess a number")

if (userNumber > computerNumber) {
	alert("Your guess was too high")
}
else if (userNumber < computerNumber){
	alert("Your guess was too low")	
}
else {
	alert("Your guess was just right")
}