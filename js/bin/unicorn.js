


$(document).ready(function() {

    $('select').material_select();





  });

var slider = document.getElementById('horn-length');
  noUiSlider.create(slider, {
   start: [5, 25],
   connect: true,
   step: 1,
   orientation: 'horizontal',
   range: {
     'min': 5,
     'max': 25
   },
   format: wNumb({
     decimals: 0
   })
  });