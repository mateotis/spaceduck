let nextDiagReady = false;

$(document).ready(function() {
    $("#duck").animate({left: "40%"}, 10000, "linear", function() {
		$('#panel2-diag1').fadeIn();
		nextDiagReady = true; // Enable advancing the dialogue only after the first line has appeared
		$("#duck").animate({left: "85%"}, 11250, "linear"); // These numbers ensure constant speed in both stages (if one changes, the other should too!)
	});

});

$(document).ready(function() {
	$(document).click(function() {
		if(nextDiagReady == true) {
			$("#panel2-diag1").fadeOut(function() {
				$("#panel2-diag2").fadeIn();
			});
		}
	});
});
