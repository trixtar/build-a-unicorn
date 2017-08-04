


$(document).ready(function() {

  var unicornForm = document.getElementById('get-unicorn');
  unicornForm.reset();

  // activo selects en Materialize

  $('select').material_select();

  // cargo valores de JSON en el select #fur

  $.getJSON( "/public/json/document.json", function (data) {
    var options = '<option value="" disabled selected>Fur color</option>';
    $.each(data.fur_color, function(key, val) {
      options += '<option value="' + val.value + '">' + val.label + '</option>';
    });
    $('#fur').html(options);
    $('#fur').material_select();
  });

  // listener de submit al formulario

  
  

  $("#get-unicorn").submit(function (event) {
  var unicorn = {
    "name": unicornForm.name.value,
    "gender": unicornForm.gender.value,
    "fur": unicornForm.fur.value,
    "horn": unicornForm.horn.value,
    "email": unicornForm.email.value,
    "terms-conditions": unicornForm.terms-conditions.value
  };
  console.log("el submit funciona");
  console.log(unicorn);
  event.preventDefault();
});

});

/*
var slider = document.getElementById('horn-length');
  noUiSlider.create(slider, {
   start: [5],
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