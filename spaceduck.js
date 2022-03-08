let currentDiagLine = 0;
let finishedPanel = 0;
let currentPanel = 1;
let flashbacksSeen = new Array(3).fill(false);


$(document).ready(function() { // Click title screen, transition to panel 2
	$("#title-screen").click(function() {
		finishedPanel = 1;
		$("#title-screen").fadeOut(function() {
			$("#panel1").hide();
			$("#panel2").show();
		});
	});
});

$(document).ready(function() { // Once we're on panel 2, run duck floating animation and make first line of dialogue appear
	$(document).click(function() {
		console.log("click!");
		console.log(finishedPanel, currentPanel);
		if(finishedPanel == 1 && currentPanel == 1) {
			currentPanel = 2;
		    $("#duck2").animate({left: "40%"}, 1000, "linear", function() {
				console.log("in here");
				$('#panel2-diag1').fadeIn();
				currentDiagLine = 1; // Enable advancing the dialogue only after the first line has appeared
				$("#duck2").animate({left: "100%"}, 15000, "linear"); // These numbers ensure constant speed in both stages (if one changes, the other should too!)
			});
		}
	});
});



$(document).ready(function() { // Transition between panels
	$(document).click(function() {
		if(finishedPanel == 2 && currentPanel == 2) {
			currentPanel = 3;
			$("#panel2").fadeOut(function() {
				$("#panel3").show();
				console.log('trans to panel3');
			});
		}
		else if(finishedPanel == 3 && currentPanel == 3) {
			$("#panel3").hide();
			$("#panel4").show();
			currentPanel = 4;
			console.log('trans to panel4');
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
		if(currentPanel == 2) {
			if(currentDiagLine == 1) {
				$("#panel2-diag1").fadeOut(function() {
					$("#panel2-diag2").fadeIn();
				});
				currentDiagLine = 2;
			}
			else if(currentDiagLine == 2) {
				$("#panel2-diag2").fadeOut(function() {
					$("#panel2-diag3").fadeIn();
				});
				finishedPanel = 2;
				currentDiagLine = 3;
			}
		}
		// else if(currentPanel == 3) {
		// 	if(currentDiagLine == 3) {
		// 		$("#panel3-diag1").fadeIn();
		// 		currentDiagLine = 4;
		// 	}
		// }

	});
});

$(document).ready(function() {
	$(document).on('mousemove', (event) => { // Making the duck follow our cursor (within bounds)
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
	$(document).on('mousemove', (event) => { // Flashback hitbox tracking, making them appear/disappear
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
			flashbacksSeen[0] = true; // Track which flashbacks we've visited
			$('#fb-img1').css("opacity","0.8");
		}
		else {
			$('#fb-img1').css("opacity", "0");
		}

		if(offset2.left < event.clientX && event.clientX < (offset2.left + fbWidth2) && offset2.top < event.clientY && event.clientY < (offset2.top + fbHeight2)) {
			flashbacksSeen[1] = true;
			$('#fb-img2').css("opacity","0.8");
		}
		else {
			$('#fb-img2').css("opacity","0");
			//$('#fb-img2').fadeOut();
		}

		if(offset3.left < event.clientX && event.clientX < (offset3.left + fbWidth3) && offset3.top < event.clientY && event.clientY < (offset3.top + fbHeight3)) {
			flashbacksSeen[2] = true;
			$('#fb-img3').css("opacity","0.8");
		}
		else {
			$('#fb-img3').css("opacity","0");
		}

		let progCheck = flashbacksSeen.every(Boolean); // Fancy JS syntax to check whether all elements in the list are true - if they are, we've seen every flashback at least once
		if(progCheck == true) {
			finishedPanel = 3; // Which means we're done with this panel!
			$("#panel3-diag1").fadeIn();
			currentDiagLine = 4;
		}
	});
});


//panel 4

// duck followa cursor to avoid asteroids ( same as máté's, i just changed the id to fit my panel, nothing new)

$(document).ready(function() {
	$(document).on('mousemove', (event) => {
		let offset = $("#panel4").offset();
		let panelHeight = $("#panel4").height();
		let duckHeight = $("#duck4").height();
		let panelWidth = $("#panel4").width();
		let duckWidth = $("#duck4").width();
		if(event.clientX < (panelWidth - duckWidth) && offset.top < event.clientY && event.clientY < (offset.top + panelHeight - duckHeight)) {
			$('#duck4').css({
				left: event.clientX,
				top: event.clientY,
			});
		}

	});
});

//--  ast animation
$(document).ready(function() {
    animateDiv($('#ast1'));
		animateDiv($('#ast2'));
		animateDiv($('#ast3'));
		animateDiv($('#ast4'));
		animateDiv($('#ast5'));
		animateDiv($('#ast6'));
		animateDiv($('#ast7'));
		animateDiv($('#ast8'));
		animateDiv($('#ast9'));
		animateDiv($('#ast10'));
		animateDiv($('#ast11'));
		animateDiv($('#ast12'));
		animateDiv($('#ast13'));
		animateDiv($('#ast14'));

});
// this creates the container for the images to float in
function makeNewPosition($panel4) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $panel4.height() - 50;
    var w = $panel4.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}
// this creates the  movement
function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};
// this is for speed
function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}

// panel 4 dialoge timer

function fade() {
			 $('#panel4-diag1').fadeIn().delay(500).fadeOut();
			       $('#panel4-diag2').delay(5000).fadeIn().delay(5000).fadeOut(fade);
		 }
fade();


function myFunction() {
  document.getElementById("#panel5").click();
}
