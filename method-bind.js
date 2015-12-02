function speak(line) {
  console.log("The " + this.type + " rabbit says '" + line + "'");
}

var youngRabbit = {type: "young", speak: speak};
youngRabbit.speak("I could use a carrot right now.");

speak.call({type: "old"}, "Oh my.");
speak.apply(youngRabbit, ["Burp!"]);
var whiteRabbitSpeak = speak.bind(youngRabbit);
whiteRabbitSpeak("I am so white.");

// var babyRabbit = (a, b) => {};
// // var babyRabbit = function (a, b) {
// // }.bind(this)
// b.babyRabbit() // this = window (not b)

var cow = {
  type: "cow",
  say: (sound) => {
    console.log("The " + this.type + " says " + sound);
  }
}
cow.say("Moo");
