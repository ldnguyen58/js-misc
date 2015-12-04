function speak(line) {
  console.log("The " + this.type + " rabbit says '" + line + "'");
}

var youngRabbit = {type: "young", speak: speak};
youngRabbit.speak("I could use a carrot right now.");

speak.call({type: "old"}, "Oh my.");
speak.apply(youngRabbit, ["Burp!"]);
var whiteRabbitSpeak = speak.bind(youngRabbit);
whiteRabbitSpeak("I am so white.");

var cow = {
  type: "cow",
  say: (sound) => {
    console.log("The " + this.type + " says " + sound);
  }
};
cow.say("Moo"); //this = window (not cow)

function tell(sound) {
  var t = () => {
    console.log("The " + this.type + " says " + sound);
  }
  t();
}
var bear = {
  type: "bear",
  tell: tell
};
bear.tell("Grr");
