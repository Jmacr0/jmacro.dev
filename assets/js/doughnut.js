var ctx = document.getElementById("lineChart");
Chart.defaults.scale.ticks.beginAtZero = true;
/* Chart.defaults.global.defaultFontSize = 5; */

// For a pie chart
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['HTML', 'CSS', 'Javascript', 'Project One', 'Locked'],
    datasets: [
      {
        label: 'Topics',
        backgroundColor: ['#ff9100', '#008cff','#ffe600','#4aaaa5', '#ddd'],
        borderWidth: 0,
        
        data: [1, 1, 4, 1, 21]
      }
    ]
  },
  
  options: {
    
    title: {
      display: true,
      text: "Bootcamp Progress",
      fontSize: 20
    },
    
   responsive: true,
    cutoutPercentage: 20,
    animation: {
      animateScale: true
    },
    maintainAspectRatio : false,
    legend: {
      display: false,
      position: 'right',
    }
  }
  
});