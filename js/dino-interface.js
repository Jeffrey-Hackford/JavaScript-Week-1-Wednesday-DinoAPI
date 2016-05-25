var apiKey = require('./../.env').apiKey;
var dinoArray = [];
var Dino = require('./../js/Dino.js').DinoModule;
var fakeDinos = ["testasaurous", "fakeasaurous", "a", "b", "c"];

$(document).ready(function(){

var DinoTest = new Dino();
console.log(DinoTest);

  $('#dino').submit(function(event) {
    event.preventDefault();
    // $.get(apiKey).then(function(response){
    //   var dinos = response;
    //   dinoArray.push(dinos);
    // });
    // $.get(apiKey).then(function(response){
    //   var dinos = response;
    //   dinoArray.push(dinos);
    // });
    var Dino1 = DinoTest.getDino();
    dinoArray.push(Dino1);

    var Dino2 = DinoTest.getDino();
    dinoArray.push(Dino2);

    var randomPick = Math.floor(Math.random() * fakeDinos.length);
    dinoArray.push(fakeDinos[randomPick]);

    console.log(dinoArray);
    dinoArray= [];

  });
});






















// var apiKey = require('./../.env').apiKey;
// var dino = require('./../js/Dino.js').Dino;
// var fakeDinos = ["testasaurous", "fakeasaurous", "a", "b", "c"];
//
// $(document).ready(function(){
//   var dinoArray = [];
//
//   $('#dino').submit(function(event) {
//     event.preventDefault();
//
//     var dino1;
//     var dino2;
//     var dino3;
//
//     $.get(apiKey).then(function(response){
//       var dino1 = response;
//     });
//     $.get(apiKey).then(function(response){
//       var dino2 = response;
//     });
//     var randomPick = Math.floor(Math.random() * fakeDinos.length);
//     var dino3 = (fakeDinos[randomPick]);
//
//     var newDino = new Dino(dino1, dino2, dino3);
//     newDino.shuffle();
//     dinoArray.push(newDino);
//     console.log(dinoArray);
//     dinoArray= [];
//   });
// });
