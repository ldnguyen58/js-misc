//Constructor
function Rabbit(type) {
  this.type = type;
}
var fatRabbit = new Rabbit("fat");
console.log(fatRabbit.type);

//Prototype
Rabbit.prototype.speak = function (line) {
  console.log("The " + this.type + " rabbit says '" + line + "'");
};
fatRabbit.speak("Hungry!");
console.log(Object.getPrototypeOf(fatRabbit) == Rabbit.prototype);

// Object.create: create an obj with a specify prototype
var protoRabbit = {
  speak: function (line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
  }
};
var oldRabbit = Object.create(protoRabbit);
oldRabbit.type = "old";
oldRabbit.speak("Oh my!");

//prototype inteference
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
//Create enumerable property
Object.prototype.nonsense = "hi";
//Create nonenumerable property
Object.defineProperty(Object.prototype, "hiddennonsense", {enumerable: false, value: "hi-nonEnum"});
for (event in map)
  console.log(event);
console.log("nonsense" in map);
console.log("toString" in map); //nonenumerable
console.log("hiddennonsense" in map); //nonenumerable
console.log(map.hasOwnProperty("nonsense"));

var obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) == Object.prototype);
console.log("toString" in obj);
