const weightChartCtx = document.getElementById('weightChart').getContext('2d');
const exerciseChartCtx = document.getElementById('exerciseChart').getContext('2d');

const weightChart = new Chart(weightChartCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
        datasets: [{
            label: 'Weight Gain (kg)',
            data: [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6],
            borderColor: 'rgba(118, 199, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const exerciseChart = new Chart(exerciseChartCtx, {
    type: 'pie',
    data: {
        labels: ['Completed', 'Pending'],
        datasets: [{
            data: [50, 25],
            backgroundColor: ['#76c7c0', '#e0e0e0']
        }]
    },
    options: {
        responsive: true
    }
});