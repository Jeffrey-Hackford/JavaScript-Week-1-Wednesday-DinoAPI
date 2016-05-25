var apiKey = require('./../.env').apiKey;



exports.DinoModule = function(){

};
exports.DinoModule.prototype.getDino = function(displayFunction) {
  $.get(apiKey).then(function(response){
    var dinos = response;
    // $('#row').append('<h1 class="jumbotron col-xs-4"><span id="dino1random">' + dinos + '</span></h1>');
    displayFunction(dinos);
  });

};


exports.DinoModule.prototype.shuffle = function(dinoArray) {
    var j, x, i;
    for (i = dinoArray.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = dinoArray[i - 1];
        dinoArray[i - 1] = dinoArray[j];
        dinoArray[j] = x;
    }
};
