// When fact button is clicked
$("#factButton").on("click", function() {
	//We generate a random number between 0 and 4 (the numbe of facts in the booFacts array)
	var number = Math.floor((Math.random() * booFacts.length));
	//We display th fact from ths booFacts array
	$("#factText").text(booFacts[number])
})


//Array holds all booFacts
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books", "Boo has a stinky butt" ]

//Changing colour to pink
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})

$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})