


$(document).ready(function() {

  // inicialización

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


  // Hamburger menu dialog

  $('#hamburger-menu').click(function() {
     Materialize.toast('Nothing there yet!', 4000, 'rounded')
  });

  // card hover animation

  $('.my-card').on({
    mouseenter: function() {$('.my-card').addClass('z-depth-5');},
    mouseleave: function() {$('.my-card').removeClass('z-depth-5');}
  });


  // listener de submit al formulario

  $("#get-unicorn").submit(function (event) {
    event.preventDefault();
    var unicorn = {
      "name": unicornForm.name.value,
      "gender": unicornForm.gender.value,
      "fur": unicornForm.fur.value,
      "horn": unicornForm.horn.value,
      "email": unicornForm.email.value,
      "terms": unicornForm.terms.value
    };
    var data = $("#get-unicorn").serializeArray();
    var jsonString = JSON.stringify(data);
    console.log(jsonString);
    Materialize.toast(unicorn.name + ' is coming to life! Glitter on!', 7000, 'rounded', function() {
      unicornForm.reset();
    });
  });


});