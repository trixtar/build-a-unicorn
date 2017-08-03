


$(document).ready(function() {

    $('select').material_select();

    $.getJSON( "/public/json/document.json", function (data) {
      var options = '<option value="" disabled selected>Fur color</option>';
      $.each(data.fur_color, function(key, val) {
        options += '<option value="' + val.value + '">' + val.label + '</option>';
      });
      console.log(options);
      $('#fur').html(options);
      $('#fur').material_select();
    });

  });

/*
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
  */