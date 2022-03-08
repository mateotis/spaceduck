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
		if(finishedPanel == 1 && currentPanel == 1) {
			currentPanel = 2;
		    $("#duck2").animate({left: "40%"}, 10000, "linear", function() {
				$('#panel2-diag1').fadeIn();
				currentDiagLine = 1; // Enable advancing the dialogue only after the first line has appeared
				$("#duck2").animate({left: "100%"}, 15000, "linear"); // These numbers ensure constant speed in both stages (if one changes, the other should too!)
			});
		}
	});
});


$(document).ready(function() { // Transition between panels
	$(document).click(function() {
		if(finishedPanel == 2 && currentPanel == 2) { // Progress from panel to panel is controlled by these two variables, which we set throughout various JS events
			currentPanel = 3;
			$("#panel2").fadeOut(function() { // We use the fadeout + callback function combo to make for smooth, cinematic transitions
				$("#panel3").show();
			});
		}
		else if(finishedPanel == 3 && currentPanel == 3) {
			currentPanel = 4;
			$("#panel3").fadeOut(function() {
				$("#panel4").show();
			});
		}
		else if(finishedPanel == 4 && currentPanel == 4) {
			currentPanel = 5;
			$("#panel4").fadeOut(function() {
				$("#panel5").show(function() {
					$("#journey1").fadeIn(function() { // Chaining callbacks like this gives the journey gifs a left fade look
						$("#journey2").fadeIn(function() {
							$("#journey3").fadeIn(function() {
							});
						});
					});
				});
			});
		}
		else if(finishedPanel == 5 && currentPanel == 5) {
			currentPanel = 6;
			$("#panel5").fadeOut(function() {
				$("#panel6").show();
			});
		}
	});
});

$(document).ready(function() { // Trigger next line of dialogue (only for panel 2)
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
	});
});

$(document).ready(function() {
	$(document).on('mousemove', (event) => { // Making the duck follow our cursor

		if(currentPanel == 3) {
			$('#duck3').css({
				left: event.clientX,
				top: event.clientY,
			});
		}
		else if(currentPanel == 4) {
			$('#duck4').css({
				left: event.clientX,
				top: event.clientY,
			});
		}
	});
});

$(document).ready(function() {
	$(document).on('mousemove', (event) => { // Flashback hitbox tracking, making them appear/disappear

		if(currentPanel == 3) {

			// Keep track of all our boundaries - there are a lot!
			let offset1 = $("#flashback1").offset(); // Where is the element relative to the top-left of the page
			let fbHeight1 = $("#flashback1").height(); // Element height
			let fbWidth1 = $("#flashback1").width(); // Element width

			let offset2 = $("#flashback2").offset();
			let fbHeight2 = $("#flashback2").height();
			let fbWidth2 = $("#flashback2").width();

			let offset3 = $("#flashback3").offset();
			let fbHeight3 = $("#flashback3").height();
			let fbWidth3 = $("#flashback3").width();

			if(offset1.left < event.clientX && event.clientX < (offset1.left + fbWidth1) && offset1.top < event.clientY && event.clientY < (offset1.top + fbHeight1)) { // The actual math - all these relations together ensure that our mouse is within said flashback prompt before triggering the flashback
				flashbacksSeen[0] = true; // Track which flashbacks we've visited
				$('#fb-img1').css("opacity","0.8"); // Only set to 0.8 opacity for that "memory" feeling
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
				$("#panel3-diag1").fadeIn(); // Let the reader know
				currentDiagLine = 4;
			}
		}
	});
});

$(document).ready(function() {
	$(document).on('mousemove', (event) => { // Trigger to leave panel 4 - get to the right edge of the screen
		let goal = $("#panel4").width() * 0.85; // Specifically, move the mouse to the last 15% of the screen width

		if(currentPanel == 4 && event.clientX > goal) {
			finishedPanel = 4;
		}
	});
});

// animating the asteroids for panel 4
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

    // get viewport dimensions (remove the dimension of the div)
    var h = $panel4.height() - 50;
    var w = $panel4.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

// this creates the movement
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

// makes the warning dialogue alternate automatically
function fade() {
	$('#panel4-diag3').fadeIn();
	$('#panel4-diag2').fadeIn().delay(500).fadeOut(function() {
		$('#panel4-diag1').fadeIn().delay(500).fadeOut(fade);
	});
}
fade();

$(window).scroll(function() { // The trigger to leave panel 5 - scroll to the bottom
	if(currentPanel == 5) {
		if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) { // ...with some leeway
			finishedPanel = 5;
		}
	}
});
