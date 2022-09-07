google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
    ['Concepto', 'Monto'],
    ['CxC',     500],
    ['CxP',      100]
]);

var options = {
    title: 'Estatus Administrativo'
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
}


