$(document).ready(function() {

	//My random numbers	

		//random number for Target number. 19-120
		var targetNum= Math.floor((Math.random() * 100) + 21);
		//assigning random values for each gem. 1-12
		var gem1= Math.floor((Math.random() * 12) + 1);
		var gem2= Math.floor((Math.random() * 12) + 1);
		var gem3= Math.floor((Math.random() * 12) + 1);
		var gem4= Math.floor((Math.random() * 12) + 1);

	//random number will populate the html id.
		$("#targetNum").text(targetNum);


//counter variables
		var winsCounter= 0;
		var lossesCounter= 0;
		var myScore= 0;

	$(".winsCounter").text(winsCounter);
	$(".lossesCounter").text(lossesCounter);


//resets random numbers after a round.
	function reset() {
		targetNum=Math.floor((Math.random() * 110) +1);
		$("#targetNum").text(targetNum);
			gem1= Math.floor((Math.random() * 14) + 1);
			gem2= Math.floor((Math.random() * 14) + 1);
			gem3= Math.floor((Math.random() * 14) + 1);
			gem4= Math.floor((Math.random() * 14) + 1);
			myScore= 0;
			$("#myScore").text(myScore);
	}


//my button click actions.
	$("#gem1").click(function() {
		myScore = myScore + gem1;
		// console.log(gem1);
		$("#myScore").text(myScore);
			if (myScore === targetNum) {
				winCheck();
			}
			else if (myScore > targetNum) {
				lossCheck();
			}
	});

	$("#gem2").click(function() {
		myScore = myScore + gem2;
		// console.log(gem2);
		$("#myScore").text(myScore);
			if (myScore === targetNum) {
				winCheck();
			}
			else if (myScore > targetNum) {
				lossCheck();
			}
	});

	$("#gem3").click(function() {
		myScore = myScore + gem3;
		// console.log(gem3);
		$("#myScore").text(myScore);
			if (myScore === targetNum) {
				winCheck();
			}
			else if (myScore > targetNum) {
				lossCheck();
			}
	});

	$("#gem4").click(function() {
		myScore = myScore + gem4;
		// console.log(gem4);
		$("#myScore").text(myScore);
			if (myScore === targetNum) {
				winCheck();
			}
			else if (myScore > targetNum) {
				lossCheck();
			}
	});


//alert pop ups for a win or loss.
	function winCheck() {
		winsCounter++;
		alert("You won this round!")
		$(".winsCounter").text(winsCounter);
		reset();
	}
	function lossCheck() {
		lossesCounter++;
		alert("You lost this round.");
		$(".lossesCounter").text(lossesCounter);
		reset();
	}

});