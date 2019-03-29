console.log("connected");

//DELETE ALERT ON BUTTON CLICK
$(document).ready(function(){
  $(".alert-button").click(function(){
    $(".alert").remove();
  });
});

// TRAFFIC CHART - LINE CHART
var ctx = document.getElementById('myLineChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: '',
            lineTension: 0,
            backgroundColor: 'rgba(177, 150, 196, 0.63)',
            borderColor: 'rgb(148, 123, 166)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            data: [0, 750, 1250, 1000, 1500, 2000, 1750, 1500, 1750, 1250, 1750, 2000, 1750, 2250]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
                  return tooltipItem.yLabel;
                }
        }
      }
    }
});

// DAILY TRAFFIC CHART - BAR CHART
var ctx2 = document.getElementById('myBarChart').getContext('2d');
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(177, 150, 196)',
            borderColor: 'rgb(177, 150, 196)',
            data: [75, 100, 175, 125, 225, 200, 100]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
                  return tooltipItem.yLabel;
                }
        }
      }
    }
});

// DAILY TRAFFIC CHART - BAR CHART
var ctx3 = document.getElementById('myPieChart').getContext('2d');
var chart3 = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(118, 182, 136)', 'rgb(85, 133, 138)', 'rgba(99, 0, 176, 0.44)'],
            data: [20, 25, 55]
        }]
    },

    // Configuration options go here
    options: {}
});
