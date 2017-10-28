
//Crystal Variables

var crystal = {
	one: {
		name:"One",
		value: 0
	},
	two:
	{
		name: "Two",
		value: 0
	},
	three:
	{
		name: "Three",
		value: 0
	},
	four:
	{
		name: "four",
		value: 0
	}
};

var currentScore = 0;
var wins = 0;
var loss = 0;


//Functions
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {

	var currentScore = 0;

//Set random score between 19-100
targetScore = getRandom(19, 120);

//Main Process - Where functions are called

crystal.one.value = getRandom(1, 12);
crystal.two.value = getRandom(1, 12);
crystal.three.value = getRandom(1, 12);
crystal.four.value = getRandom(1, 12);

$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);


console.log("-------------")
console.log("Target Score " + targetScore);
console.log("One: " + crystal.one.value + " | Two " + crystal.two.value + " | Three: " + crystal.three.value + " | Four: " + crystal.four.value);
}

var addValues = function(crystal) {
	currentScore = currentScore + crystal.value;
	$("#yourScore").html(currentScore);
	checkWin();
	console.log("Your score: " + currentScore)
}

var checkWin = function () {
	if(currentScore > targetScore) {
		alert("Sorry, You lost!");
		console.log("You Lost")
		loss++
		$("#losses").html(loss);
		startGame();

	}

	else if (currentScore == targetScore) {
		alert("You Win!")
		console.log("You win!")
		wins++
		$("#wins").html(wins);
		startGame();
	}

}


startGame();

$('#one').click( function() {
	addValues(crystal.one);

});

$('#two').click( function() {
	addValues(crystal.two);

});

$('#three').click( function() {
	addValues(crystal.three);

});

$('#four').click( function() {
	addValues(crystal.four);

});