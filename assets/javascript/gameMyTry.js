$(document).ready(function() {

var winsCounter= 0;
var lossesCounter= 0;
var scoreNumber= [];
var scoreCounter=0;

//starts game from scratch
reset();



//win or lose function
function winLoseCheck() {
if (myScore === targetNum) {
	scoreUpdates();
	winsCounter++;
	alert("You won this round!");
}
else if (myScore > targetNum){
	scoreUpdates();
	lossesCounter++;
	// alert("You lost this round.")
}
};

//display updated scores
$("#myScore").text(myScore);
$(".winsCounter").text(winsCounter);
$(".lossesCounter").text(lossesCounter);

//random values assigned to gems
function getGemValues() {
var gem11= Math.floor((Math.random() * 15) + 1);
console.log(gem1);
scoreNumber.push(gem1[0])
var gem2= Math.floor((Math.random() * 15) + 1);
console.log(gem2);
var gem3= Math.floor((Math.random() * 15) + 1);
console.log(gem3);
var gem4= Math.floor((Math.random() * 15) + 1);
console.log(gem4);
};

//get buttons ready for clicks

$("#gem1").click(function() {
	 console.log("gem1")
	 
	});

$("#gem2").click(function() {
	 console.log("gem2")
	 scoreNumber.push(gem2);
	});
$("#gem3").click(function() {
	 console.log("gem3")
	 scoreNumber.push(gem3);
	});
$("#gem4").click(function() {
	 var gem4= Math.floor((Math.random() * 15) + 1);
	 console.log("gem4")
	 scoreNumber.push(gem4);
	});



//reset game random target number and button values
function reset() {
var targetNum= Math.floor((Math.random() * 40) + 41);
$("#targetNum").text(targetNum);
getGemValues();
myScore = 0;
};

});