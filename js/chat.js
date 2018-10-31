var speedCanvas = document.getElementById("analyticChart");
Chart.defaults.global.legend.labels.usePointStyle = true;
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 11;

var dataFirst = {
    label: "Completed",
    data: [0, 9, 30, 10, 38, 28, 20, 20, 20, 12, 12, 12 ],
    lineTension: 0.2,
    borderColor: '#8D2DAE',
    backgroundColor: '#b06ab3',
    // pointBorderColor: 'red',
    // pointBackgroundColor: 'lightgreen',
    // pointRadius: 5,
    // pointHoverRadius: 15,
    // pointHitRadius: 30,
    // pointBorderWidth: 2,
    // pointStyle: 'circle'
  };

var dataSecond = {
    label: "Incompleted",
    data: [20, 29, 13.5, 13, 28, 32, 19, 25, 20, 20, 25 ],
    lineTension: 0.1,
    borderColor: '#248AE9',
    backgroundColor: '#3c00c5',
    // pointBorderColor: 'purple',
    // pointBackgroundColor: 'lightgreen',
    // pointRadius: 5,
    // pointHoverRadius: 15,
    // pointHitRadius: 30,
    // pointBorderWidth: 2
  };

var speedData = {
  labels: ["Apr 23", "Apr 23", "Apr 24", "Apr 24", "Apr 24", "Apr 25", "Apr 25", "Apr 25", "Apr 26", "Apr 26", "Apr 26"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'right',
    backgroundColor: '#248AE9',
    labels: {
      boxWidth: 10,
      fontColor: 'black',
      backgroundColor: 'fill'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});