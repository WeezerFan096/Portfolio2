let temp = 30;
var fuel = 100;
var newfuel = 0;
window.addEventListener("load", function () {
	var decreaseRate = 1;
	function updateFuel() {
		let newfuel = (fuel -= decreaseRate);
		console.log("Fuel:", fuel);
		if (fuel <= 50) {
			console.log("low on feul");
			return;
		}
		setTimeout(updateFuel, 1000);
	}
	updateFuel();
	return newfuel;
});

var xValues = ["Fuel", "Engine Temp"];
var yValues = [newfuel, temp];
var barColors = ["green", "red"];

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
