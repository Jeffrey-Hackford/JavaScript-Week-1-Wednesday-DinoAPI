var apiKey = require('./../.env').apiKey;

$(document).ready(function(){

  $('#dino').submit(function(event) {
    event.preventDefault();
    $.get(apiKey).then(function(response){
      $('#dino1random').text(response);
      console.log(response);
    });
    $.get(apiKey).then(function(response){
      $('#dino2random').text(response);
      console.log(response);
    });
    $.get(apiKey).then(function(response){
      $('#dino3random').text(response);
      console.log(response);
    });

  });
});
