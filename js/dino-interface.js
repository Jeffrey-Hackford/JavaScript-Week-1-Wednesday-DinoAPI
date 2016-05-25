var apiKey = require('./../.env').apiKey;
var dinoArray = [];
var fakeDinos = ["testasaurous", "fakeasaurous", "a", "b", "c"];

$(document).ready(function(){

  $('#dino').submit(function(event) {
    event.preventDefault();
    // debugger;
    $.get(apiKey).then(function(response){
      var dinos = response;
      dinoArray.push(dinos);
    });
    $.get(apiKey).then(function(response){
      var dinos = response;
      dinoArray.push(dinos);
    });
    var randomPick = Math.floor(Math.random() * fakeDinos.length);
    dinoArray.push(fakeDinos[randomPick]);

    // var fakeDino = fakeDinos[Math.floor((Math.random() * fakeDinos.length) + 1)];

    console.log(dinoArray);
    dinoArray= [];

  });
  // console.log(dinoArray);
});
