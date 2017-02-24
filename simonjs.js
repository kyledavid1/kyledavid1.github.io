"use strict";

$(document).ready(function() {
	console.log("loaded");
	var sequence;
	var level = 1;
	var simonColor = ["blue-box", "red-box", "green-box", "yellow-box"];
	var simonText = $("#black-box").text("Simon").css("color", "white");
	simonText.css("font-size", "45pt");
  var buttonBeep = new Audio();
  buttonBeep.src = "random/lightBeep.mp3";
  var wrongBeep = new Audio();
  wrongBeep.src = "random/beep-03.mp3";

// Allows you to click on the black box to start and restart a game. Level always starts at 1.
  $("#black-box").click(function() { 
    level = 1;
    newGame();
    simonText.text("Simon");
  });

  /* newGame starts the sequence.
  Then I call playSequence, so the computer plays the randomly generated sequence to the player.*/
	var newGame = function() {
		sequence = [];
		var gameOver = false;
    for (var i = 0; i < level; i++) {
      sequence.push(Math.round(Math.random() * (simonColor.length - 1)));
    } 
    playSequence();
	};

	/*This plays the sequence and advances to the 
  next level when the proper sequence has been selected.*/
	var playSequence = function() {
		simonColor.forEach(function(color) {
			$("#" +color).off("click");
		});
		sequence.forEach(function(color, index) {
			setTimeout(function() {
				$("#" + simonColor[color]).toggleClass("light");
          buttonBeep.play();
          setTimeout(function() {
            $("#" + simonColor[color]).removeClass("light");
          }, 700)
      }, index * 1000)
		});
		setTimeout(activateButtons, level * 1000)
	};

	// Activating the click function
  // user clicks after sequence plays
	var activateButtons = function() {
		simonColor.forEach(function(color) {
			$("#" +color).on("click", clickHandler);
		});
	};

	/* Enabling click functionality. 
   lights buttons when clicked 
   checks proper sequence is clicked*/
	var clickHandler = function() {
		var color = this
		$(this).toggleClass("light");
    buttonBeep.play();
		setTimeout(function() {
			$(color).removeClass("light");
		}, 500); 

		var correctSequence = sequence.shift();
		if (simonColor[correctSequence] === color.id) {
			if (sequence.length === 0) {
        setTimeout(function() {
          simonText.text("Level "+level);
          level++;
          newGame();
        }, 2000)
      }
    } else {
      $("#").off("click");
      simonText.css("font-size", "40px");
      simonText.text("You Lost! Restart");
      wrongBeep.play();
      level = 1;
    }	
  playerWins();
	};	
		
  //player wins after level 10 completion.
  var playerWins = function() {
    if (level > 10 && sequence.length === 0) {
      simonText.text("YOU WON!");
      setTimeout(function(){
        location.reload();
      }, 1900);
    }
  }	
});
