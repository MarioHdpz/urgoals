var rateOfInterest = 13;
var frequency = 12;
var tenurePeriodVal = 12; 			
var defaultAmmount = 2334;
var defaultYears = 5;
var dataSetZero = [];
/*var defaultYears = slider.noUiSlider.on('update', function ( values, handle ) {
  defaultYears = values[0];
});*/
var dataSetOne = [];
var dataSetTwo = [];
var nextAmmount = 0;
for (var i = 0; i < defaultYears*12; i++) {
  dataSetOne[i] = defaultAmmount;
  var years = i+1;
  dataSetTwo[i] = compundInterest(defaultAmmount+nextAmmount, years);
  nextAmmount = defaultAmmount + dataSetTwo[i];
  dataSetZero[i] = 0;
}


var finalDataSetTwo = [];
var finalDataSetOne = [];
var finalDataSetZero = [];
var a = 0;
for (var i = 0; i < dataSetTwo.length; i++) {
  if (i%3 == 0) {
    finalDataSetOne[a] = dataSetOne[i];
    finalDataSetTwo[a] = dataSetTwo[i];
    finalDataSetZero[a] = dataSetZero[i];
    a++;
  }
}

console.log(finalDataSetOne);
console.log(finalDataSetTwo);


var elements = [
  {
   'id': 'saving-chart',
   'dataSetOne': finalDataSetOne,
   'dataSetTwo': finalDataSetTwo
  },
  {
   'id': 'investing-chart',
   'dataSetOne': finalDataSetOne,
   'dataSetTwo': finalDataSetZero
  },
];

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

 function getChartData(element) {
   return {
      labels: finalDataSetOne,
      datasets: [{
          label: 'Aportación',
          backgroundColor: window.chartColors.red,
          data: element.dataSetOne
      }, {
          label: 'Interés compuesto',
          backgroundColor: window.chartColors.blue,
          data: element.dataSetTwo
      }]
   };
 }

window.onload = function() {
  window.myBar = [];
  elements.forEach(function(value, index, arr) {
      var ctx = document.getElementById(value.id).getContext("2d");
      window.myBar.push(new Chart(ctx, {
          type: 'bar',
          data: getChartData(value),
          options: {
              tooltips: {
                  mode: 'index',
                  intersect: false
              },
              responsive: true,
              scales: {
                  xAxes: [{
                      stacked: true
                  }],
                  yAxes: [{
                      stacked: true,
                      ticks: {
                          max: 10000,
                          min: 0
                    }
                  }]
              }
          }
      })
    
    );
   });
   

};

$(document).ready(function() {
  $('select').material_select();
  
  var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
   start: [1],
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 1,
     'max': 5
   },
   format: wNumb({
     decimals: 0
    })
  });
  
  /*slider.noUiSlider.on('update', function ( values, handle ) {
    value = values[0];
    var element1 = [
       [1,1,1,1,1,1,1,1,1],
       [0,1,2,3,4,5,6,7,8]
    ];
    var dataset = [1,1,1,1,1,1,1,1,1];
  	window.myBar[0].data.datasets.forEach(function (dataset,index) {
  	  dataset.data.push(dataset[index]);
  	});
    window.myBar[0].update();
  });*/
      
});

function compundInterest(principalAmount, month) {
  var numberOfMonths = month;
  var finalValue = principalAmount * (Math.pow((1 + rateOfInterest/(100 * frequency)), (numberOfMonths * frequency / tenurePeriodVal)));
  var int_value = finalValue.toFixed(0) - principalAmount;
  return int_value;
}

//$("#tbl_full").html(finalValue.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","));
//$("#tbl_int").html(int_value.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","));