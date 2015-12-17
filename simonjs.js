"use strict";

$(document).ready(function() {
 console.log("loaded");


var simonColor = ["blue-box", "red-box", "green-box", "yellow-box"];

var simonText = $("#black-box").text("Simon").css("color", "white");
simonText.css("font-size", "55pt");

var addEventListeners = function() {


$("#black-box").click(function() {
	var colorLight = (Math.round(Math.random() * (simonColor.length - 1)));
	$("#" + simonColor[colorLight]).toggleClass("light");
	setTimeout(function(){ 
		$("#" + simonColor[colorLight]).removeClass("light");
	},500)
});

$("#blue-box").click(function() {
	var that = this
	$(this).toggleClass("light");
	setTimeout(function(){
		$(that).removeClass("light");
	},500);
});
	
$("#red-box").click(function() {
	var that = this
	$(this).toggleClass("light");
	setTimeout(function(){
		$(that).removeClass("light");
	},500);
});

$("#green-box").click(function() {
	var that = this
	$(this).toggleClass("light");
	setTimeout(function(){
		$(that).removeClass("light");
	},500);
});

$("#yellow-box").click(function() {
	var that = this
	$(this).toggleClass("light");
	setTimeout(function(){
		$(that).removeClass("light");
	},500);
});


};

addEventListeners();

});
