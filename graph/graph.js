
var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["data"],
        datasets: [{
            label: 'Decibel Level',
            data: [100],
            backgroundColor: 'rgba(247, 255, 15, 1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {min:0,
											 max:100,
											 stepSize:4,
                    beginAtZero:true
									}

            }]
        }


}
});
var readout = 5;
setTimeout(function() {
   addData(myChart, [], 0);
	 console.log(readout);
}, 2000);

function addData(chart, data, datasetIndex) {
   chart.data.datasets[datasetIndex].data = data;
   chart.update();
}


//working on getting the graph to update
var canvas= document.querySelector("canvas");
var test = "test";
//function to increase the graph. Will change readout to machine readout
canvas.addEventListener("click", function() {
addData(myChart, [readout], 0);
if(readout <0)
{
readout =0;
}
else{
	readout +=5;
}
document.getElementById("soundLevel").innerHTML = readout;

});



canvas.addEventListener("mouseover", function() {
addData(myChart, [readout], 0);
if(readout <0)
{
readout =0;
}
else {
	readout -=5;
}
document.getElementById("soundLevel").innerHTML = readout;

// for(var i = 0; i<30; i++)
// if(i>15)
// {
// 	readout -=5;
// };
// remove
//
// readout +=5;
//
 });





for(var i = 0; i<30; i++)
{
	number++;
};
