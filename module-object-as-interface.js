//weekDay1, weekDay2: global variable
var weekDay1 = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return {
   name: function(number) { return names[number]; },
   number: function(name) { return names.indexOf(name); }
  };
}();
console.log(weekDay1.name(weekDay1.number("Sunday")));

(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  exports.name = function(number) { return names[number]; };
  exports.number = function(name) { return names.indexOf(name); };
})(this.weekDay2 = {});
console.log(weekDay2.name(weekDay2.number("Sunday")));

var month = function() {
  var names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}();
console.log(month.name(2));
console.log(month.number("Nov"));
