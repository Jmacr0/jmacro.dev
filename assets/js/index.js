$(document).ready(function () {
	setInterval(function () {
		let blinker = $('.blinker');
		if (blinker.css('visibility') == 'hidden') {
			blinker.css('visibility', 'visible');
		}
		else {
			blinker.css('visibility', 'hidden');
		}
	}, 500);
})









