let temp = 38;
var fuel = 96;
var newfuel = 0;
var test = 51;
var xValues = ["Fuel", "Engine Temp", "test"];
var yValues = [fuel, temp, test];
var barColors = ["green", "red", "blue"];

new Chart("myChart", {
	type: "bar",
	data: {
		labels: xValues,
		datasets: [
			{
				backgroundColor: barColors,
				data: yValues,
			},
		],
	},
	options: {
		legend: { display: false },
		title: {
			display: true,
		},
	},
});
