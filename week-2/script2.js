// Guessing Game II

var computerNumber = Math.floor((Math.random() *50) + 1);
console.log(computerNumber)

var userNumber = prompt("Please guess a number")


while (userNumber != computerNumber) {

	if (userNumber > computerNumber) {
		userNumber = prompt("Your guess was too high, try again")
	}
	else if (userNumber < computerNumber){
		alert("Your guess was too low")	
	}
}