
var ctx = document.getElementById("myChart");
//document.getElementById("soundLevel").innerHTML = 0;
var progress = document.getElementById('animationProgress');

//find a way to dynamically create these variables
//the colors and borders will be preset. maybe have a color assigned depending on the number of stores picked
//the data can be inserted using an array? maybe turning the string of the table info into the appropriate data type?




//template to insert data
var graphDataSets = [{
  label: "First Store ",
  fill: false,
  backgroundColor: 'rgba(247, 255, 15, 1)',
  borderColor: 'rgba(247, 255, 15, 1)',
  data: [50,40,60,20,70,80,110]

}, {
          label: "My Second dataset ",
          fill: false,
          borderColor: 'rgba(0, 0, 255, 1)',
          backgroundColor: 'rgba(0, 0, 255, 1)',
          data: [10,20,30,40,50,60,70]
      }];

      var graphDataSets2 = [{
        label: "Store1 ",
        fill: false,
        backgroundColor: 'rgba(247, 255, 15, 1)',
        borderColor: 'rgba(247, 255, 15, 1)',
        data: [1,43,80,2,50,71,110]

      }, {
                label: "Store2 ",
                fill: false,
                borderColor: 'rgba(0, 0, 255, 1)',
                backgroundColor: 'rgba(0, 0, 255, 1)',
                data: [30,20,30,40,70,60,400]
            }, {
              label: "Store3 ",
              fill: false,
              backgroundColor: 'rgba(100, 200, 15, 1)',
              borderColor: 'rgba(100, 200, 15, 1)',
              data: [20,40,10,50,5,91,110]

            },
          ];

var myChart = new Chart(ctx, {
    type: 'line',
    data: {

      labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: graphDataSets
            },
            options: {
                    title:{
                        display:true,
                        text: "Store Information"
                    },
                    animation: {
                        duration: 2000,
                        // onProgress: function(animation) {
                        //     progress.value = animation.currentStep / animation.numSteps;
                        // },
                        onComplete: function(animation) {
                            window.setTimeout(function() {
                              //  progress.value = 0;
                            }, 2000);
                        }
                    }
                }


});

// window.onload = function() {
//       var ctx = document.getElementById("canvas").getContext("2d");
//
//   };




var readout = 5;
//event to update the graph with the given information
document.getElementById('graphUpdate').addEventListener('click', function() {
    myChart.data.datasets = graphDataSets2;
    myChart.update();
        });


function addData(chart, data, datasetIndex) {
   chart.data.datasets[datasetIndex].data = data;
   chart.update();
}

document.getElementById('test').addEventListener('click', function() {
    myChart.data.datasets = graphDataSets;
    myChart.update();
        });


function addData(chart, data, datasetIndex) {
   chart.data.datasets[datasetIndex].data = data;
   chart.update();
}


//working on getting the graph to update
var canvas= document.querySelector("canvas");
var test = "test";


/* this commented section is for debigging
function to increase the graph. Will change readout to machine readout
canvas.addEventListener("click", function() {
addData(myChart, [readout], 0);
if(readout >=100)
{
readout =100;
}
else{
	readout +=5;
}

document.getElementById("soundLevel").innerHTML = readout;

});

*/
// canvas.addEventListener("click", function() {
// addData(myChart, [readout], 0);
// if(readout >=100)
// {
// readout =100;
// }
// else{
// 	readout +=5;
// }
// if(readout <50)
// var from = 0;
// var to = 100;
//
//
// let timerId = setInterval(function() {
//   document.getElementById("soundLevel").innerHTML = readout;
//   addData(myChart, [readout], 0);
//   if (readout == to) {
//     clearInterval(timerId);
//   }
  //see if I can make random numbers and get the graph to run for x seconds
  // {
  //   myChart.data.datasets.backgroundColor = 'rgba(0, 255, 0, 1)';
  //   myChart.update();
  // }
//   readout++;
// }, 50);
//
// });
//

// canvas.addEventListener("mouseover", function() {
// addData(myChart, [readout], 0);
// if(readout <=0)
// {
// readout =0;
// }
// else {
// 	readout -=5;
// }
// document.getElementById("soundLevel").innerHTML = readout;

// for(var i = 0; i<30; i++)
// if(i>15)
// {
// 	readout -=5;
// };
// remove
//
// readout +=5;
//
// });





// for(var i = 0; i<30; i++)
// {
// 	number++;
// };
