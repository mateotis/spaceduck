let currentDiagLine = 0;
let finishedPanel = 0;
let currentPanel = 1;



$(document).ready(function() { // Click title screen, transition to panel 2
	$("#title-screen").click(function() {
		$("#panel1").hide();
		$("#panel2").show();
		finishedPanel = 1;
		console.log("trans to panel2");
	});
});

$(document).ready(function() { // Once we're on panel 2, run duck floating animation and make first line of dialogue appear
	$(document).click(function() {
		console.log("click!");
		console.log(finishedPanel, currentPanel);
		if(finishedPanel == 1 && currentPanel == 1) {
			currentPanel = 2;
		    $("#duck2").animate({left: "40%"}, 10000, "linear", function() {
				console.log("in here");
				$('#panel2-diag1').fadeIn();
				currentDiagLine = 1; // Enable advancing the dialogue only after the first line has appeared
				$("#duck2").animate({left: "85%"}, 11250, "linear"); // These numbers ensure constant speed in both stages (if one changes, the other should too!)
			});
		}
	});
});



$(document).ready(function() { // Transition between panels
	$(document).click(function() {
		if(finishedPanel == 2 && currentPanel == 2) {
			$("#panel2").hide();
			$("#panel3").show();
			currentPanel = 3;
			console.log('trans to panel3');
		}
		else if(finishedPanel == 5 && currentPanel == 5) {
			console.log('trans to panel6');
			$("#panel3").hide();
			$("#panel6").show();
			currentPanel = 6;
		}
	});
});

$(document).ready(function() { // Trigger next line of dialogue
	$(document).click(function() {
		if(currentDiagLine == 1) {
			$("#panel2-diag1").fadeOut(function() {
				$("#panel2-diag2").fadeIn();
			});
			console.log("2nd line appeared");
			currentDiagLine = 2;
		}
		else if(currentDiagLine == 2) {
			$("#panel2-diag2").fadeOut(function() {
				$("#panel2-diag3").fadeIn();
			});
			console.log("3rd line appeared");
			finishedPanel = 2;
			currentDiagLine = 3;
		}
	});
});





// $(document).ready(function() {
// 	$(document).click(function() {
// 		if(finishedPanel == 5 && currentPanel == 5) {
// 			console.log('trans to panel6');
// 			$("#panel3").hide();
// 			$("#panel6").show();
// 			currentPanel = 6;
// 		}
// 	});
// });


$(document).ready(function() {
	$(document).on('mousemove', (event) => {
		let offset = $("#panel3").offset();
		let panelHeight = $("#panel3").height();
		let duckHeight = $("#duck3").height();
		let panelWidth = $("#panel3").width();
		let duckWidth = $("#duck3").width();
		if(event.clientX < (panelWidth - duckWidth) && offset.top < event.clientY && event.clientY < (offset.top + panelHeight - duckHeight)) {
			$('#duck3').css({
				left: event.clientX,
				top: event.clientY,
			});
		}

	});
});

$(document).ready(function() {
	$(document).on('mousemove', (event) => {
		let offset1 = $("#flashback1").offset();
		let fbHeight1 = $("#flashback1").height();
		let fbWidth1 = $("#flashback1").width();

		let offset2 = $("#flashback2").offset();
		let fbHeight2 = $("#flashback2").height();
		let fbWidth2 = $("#flashback2").width();

		let offset3 = $("#flashback3").offset();
		let fbHeight3 = $("#flashback3").height();
		let fbWidth3 = $("#flashback3").width();

		//console.log(event.clientX, event.clientY);
		//console.log("Offset:", offset, "Height:", fbHeight, "Width:", fbWidth);

		if(offset1.left < event.clientX && event.clientX < (offset1.left + fbWidth1) && offset1.top < event.clientY && event.clientY < (offset1.top + fbHeight1)) {
			console.log("in range!");
			$('#fb-img1').css("opacity","1");
		}
		else {
			$('#fb-img1').css("opacity", "0");
		}

		if(offset2.left < event.clientX && event.clientX < (offset2.left + fbWidth2) && offset2.top < event.clientY && event.clientY < (offset2.top + fbHeight2)) {
			console.log("in range!");
			$('#fb-img2').css("opacity","1");
		}
		else {
			$('#fb-img2').css("opacity","0");
			//$('#fb-img2').fadeOut();
		}

		if(offset3.left < event.clientX && event.clientX < (offset3.left + fbWidth3) && offset3.top < event.clientY && event.clientY < (offset3.top + fbHeight3)) {
			console.log("in range!");
			$('#fb-img3').css("opacity","1");
		}
		else {
			$('#fb-img3').css("opacity","0");
		}
	});
});

// $(document).ready(function(){
// 	$("#flashback1").hover(function(){
// 		$("#fb-img1").fadeIn();
// 		}, function(){
// 		$("#fb-img1").fadeOut();
// 	});
// });

// here i'll add the eventlistener for the space duck, it'll attempt to move the viewer to the next panel.
// i might start with the chaning function instead of an event eventlistener , just to test it out.

// CHANING
// $(document).ready(function(){
//   $("#MTP0").click(function(){
//     $("#panel1").css("color", "yellow").slideUp(2000);
//     $("#panel2").css("color", "yellow").slideDown(3000);
//   });
// });

// $(document).ready(function(){
//   $("#MTP12").click(function(){
//     $("#panel2,#panel3").css("color", "yellow").slideUp(2000);
//     $("#panel4").css("color", "yellow").slideDown(3000);
//   });
// });


// FADE IN AND OUT (Worked)

// $(document).ready(function(){
//   $("#MTP0").click(function(){
//     $("#panel1").fadeOut();
//     $("#panel2").fadeIn();
//     $("#panel3").fadeIn();
//     $("#panel4").fadeOut();
//   });
// });
//
// $(document).ready(function(){
//   $("#MTP12").click(function(){
//     $("#panel1").fadeOut();
//     $("#panel2").fadeOut();
//     $("#panel3").fadeOut();
//     $("#panel4").fadeIn();
//   });
// });


// HIDE/SHOW (Sorta worked)

// $(document).ready(function(){
//   $("#MTP0").click(function(){
//     $("#panel4").hide();
//     $("#panel1").hide();
//   });
//   $("#show").click(function(){
//     $("#panel2").show();
//       $("#panel3").show();
//   });
// });
//
// $(document).ready(function(){
//   $("#MTP12").click(function(){
//     $("#panel1").hide();
//     $("#panel2").hide();
//     $("#panel3").hide();
//   });
//   $("#show").click(function(){
//     $("#panel4").show();
//   });
// });
