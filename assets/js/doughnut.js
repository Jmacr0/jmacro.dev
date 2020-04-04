var ctx = document.getElementById("lineChart");
Chart.defaults.scale.ticks.beginAtZero = true;
/* Chart.defaults.global.defaultFontSize = 5; */

// For a pie chart
var myPieChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ['HTML', 'CSS', 'Javascript', 'Project One', 'Node.js', 'ES6', 'mySQL', 'MVC', "Full-Stack", "Project Two", "MongoDB", "Progressive Web Apps", "React", 'Computer Science', 'Project Three'],
		datasets: [
			{
				label: 'Topics',
				backgroundColor: ['#ff9100', '#008cff', '#ffe600', '#4aaaa5', '#00ad00', '#ffe600', '#57ddff', '#830288', '#882524', '#cffe77', '#00ad00', '#1d44f2', '#00ddd2', '#5a5a5a', '#dd2c00'],
				borderWidth: 0,
				data: [1, 1, 4, 2, 2, 1, 1, 1, 1, 2, 1, 1, 3, 1, 2]
			}
		]
	},

	options: {

		title: {
			display: true,
			text: "Bootcamp Progress (24/24 Weeks)",
			fontSize: 20,
			fontColor: "#ffffff"
		},

		responsive: true,
		cutoutPercentage: 20,
		animation: {
			animateScale: true
		},
		maintainAspectRatio: false,
		legend: {
			display: true,
			position: 'bottom',
			labels: {
				fontColor: '#ffffff'
			}
		}
	}
});