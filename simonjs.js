"use strict";

$(document).ready(function() {
	console.log("loaded");
	var sequence;
	var level = 10;
	var simonColor = ["blue-box", "red-box", "green-box", "yellow-box"];

	var newGame = function() {
		sequence = [];
		for (var i = 0; i < level; i++) {
			sequence.push(Math.round(Math.random() * (simonColor.length - 1)));
		}
		playSequence();
	};

	var playSequence = function() {
		sequence.forEach(function(color, index) {
			setTimeout(function() {
				$("#" + simonColor[color]).toggleClass("light");
				setTimeout(function() {
					$("#" + simonColor[color]).removeClass("light");
				}, 700)
			}, index * 1000)
		})
		setTimeout(activateButtons, level * 1000)
	}

	var activateButtons = function() {
		alert("hey!")
		simonColor.forEach(function(color) {
			$("#"+color).on("click", clickHandler)

		})
	}

	var clickHandler = function() {
		var color = this
		$(this).toggleClass("light");
		setTimeout(function() {
			$(color).removeClass("light");
		}, 500);
	}

	// $("#"+color).off("click", clickHandler)

	newGame();

//--------------------------------------------------------------

	// var simonColor = ["blue-box", "red-box", "green-box", "yellow-box"];

	// var simonText = $("#black-box").text("Simon").css("color", "white");
	// simonText.css("font-size", "55pt");

	// var addEventListeners = function() {

	// 	$("#black-box").click(function() {
	// 		getRandom()
	// 	});

	// 	var getRandom = function() {
	// 		var colorLight = (Math.round(Math.random() * (simonColor.length - 1)));
	// 		sequence.push(colorLight)
	// 		$("#" + simonColor[colorLight]).toggleClass("light");
	// 		setTimeout(function() {
	// 			$("#" + simonColor[colorLight]).removeClass("light");
	// 		}, 500)
	// 	};

	// 	// 	sequence.forEach() {
	// 	// 		doCheck();
	// 	// 	}
	// 	// };

	// 	var doCheck = function(sequence) {
	// 		// get user to click.

	// 		$('.box').click(function() {
	// 				var playerChoice = this.id

	// 			})
	// 			// compariosn of user click vs sequence item we're currently looping on 
	// 	};



	// 	$("#blue-box").click(function() {
	// 		var color = this
	// 		$(this).toggleClass("light");
	// 		setTimeout(function() {
	// 			$(color).removeClass("light");
	// 		}, 500);
	// 	});

	// 	$("#red-box").click(function() {
	// 		var color = this
	// 		$(this).toggleClass("light");
	// 		setTimeout(function() {
	// 			$(color).removeClass("light");
	// 		}, 500);
	// 	});

	// 	$("#green-box").click(function() {
	// 		var color = this
	// 		$(this).toggleClass("light");
	// 		setTimeout(function() {
	// 			$(color).removeClass("light");
	// 		}, 500);
	// 	});

	// 	$("#yellow-box").click(function() {
	// 		var color = this
	// 		$(this).toggleClass("light");
	// 		setTimeout(function() {
	// 			$(color).removeClass("light");
	// 		}, 500);
	// 	});



	// 	var play = function() {
	// 		var colorsPlayed = [colorLight];

	// 		$("#black-box").on("click", "#black-box", function() {
	// 			for (var i = 0; i <= simonColor.length; i++) {
	// 				if (playerChoice === colorsPlayed[i]) {
	// 					console.log("win");
	// 				} else {
	// 					alert("Nice Try, Dr. Jones!");
	// 				}
	// 			}
	// 		});

	// 	};

	// };

	// addEventListeners();

});