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
			$("#panel2").hide();
			$("#panel3").show();
			//$("#duck2").remove();
			//$("#panel3").append("<img class = 'duck' id = 'duck3' src = 'duck.png' width = '200' height = '100'>")
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
		let offset = $("#flashback1").offset();
		let fbHeight = $("#flashback1").height();
		let fbWidth = $("#flashback1").width();

		console.log(event.clientX, event.clientY);
		console.log("Offset:", offset, "Height:", fbHeight, "Width:", fbWidth);

		if(offset.left < event.clientX && event.clientX < (offset.left + fbWidth) && offset.top < event.clientY && event.clientY < (offset.top + fbHeight)) {
			console.log("in range!");
			$('#fb-img1').fadeIn();
		}
		else {
			$('#fb-img1').fadeOut();
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

$(document).ready(function() {
	$("#title-screen").click(function() {
		$("#panel1").hide();
		$("#panel2").show();
	});
});
