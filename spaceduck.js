let nextDiagReady = false;
let finishedPanel = 0;
let currentPanel = 2;

$(document).ready(function() {
    $("#duck2").animate({left: "40%"}, 10000, "linear", function() {
		$('#panel2-diag1').fadeIn();
		nextDiagReady = true; // Enable advancing the dialogue only after the first line has appeared
		$("#duck2").animate({left: "85%"}, 11250, "linear"); // These numbers ensure constant speed in both stages (if one changes, the other should too!)
	});

});

$(document).ready(function() {
	$(document).click(function() {
		if(nextDiagReady == true) {
			$("#panel2-diag1").fadeOut(function() {
				$("#panel2-diag2").fadeIn();
				finishedPanel = 2;
			});
		}
	});
});

$(document).ready(function() {
	$(document).click(function() {
		if(finishedPanel == 2 && currentPanel == 2) {
			$("#duck2").remove();
			$("#panel3").append("<img class = 'duck' id = 'duck3' src = 'duck.png' width = '200' height = '100'>")
			currentPanel = 3;
		}
	});
});

$(document).ready(function() {
	$(document).on('mousemove', (event) => {
		let offset = $("#panel3").offset();
		let panelHeight = $("#panel3").height();
		let duckHeight = $("#duck3").height();
		let panelWidth = $("#panel3").width();
		let duckWidth = $("#duck3").width();
		console.log(panelHeight);
		console.log("Offset left/top: " + offset.left + " " + offset.top);
		console.log("Event left/top: " + event.clientX + " " + event.clientY);
		if(event.clientX < (panelWidth - duckWidth) && offset.top < event.clientY && event.clientY < (offset.top + panelHeight - duckHeight)) {
			console.log("Changing position");
			$('#duck3').css({
				left: event.clientX,
				top: event.clientY,
			});
		}

	});
});
