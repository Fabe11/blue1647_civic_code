var userNumber = prompt("Pick a number")
var computerNumber = Math.floor((Math.random()*25) + 1)
console.log(computerNumber);

while (userNumber != computerNumber){
	if (computerNumber > userNumber){
		userNumber = prompt("Your number was too low, guess again")
	}
	else {
		userNumber = prompt("Your number was too high")
	}
}

alert("GREAT!")