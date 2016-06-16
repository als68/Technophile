module.exports = Tablet;

function Tablet(){


  this.touch = function(x, y){
    var newObject = {
      x,
      y
    };
     return newObject;
  };
}