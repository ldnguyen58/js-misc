function logFive(obj) {
  var i = 0;
  while (i < 5 && obj.next()) {
    console.log(obj.current());
    i++;
  }
}

function ArraySeq(array) {
  this.array = array;
  this.currentIdx = -1;
}
ArraySeq.prototype.current = function() {
  return this.array[this.currentIdx];
};
ArraySeq.prototype.next = function() {
  if (this.array == null || this.currentIdx >= this.array.length - 1)
    return false;
  this.currentIdx++;
  return true;
};

function RangeSeq(from, to) {
  this.to = to;
  this.currentIdx = from - 1;
}
RangeSeq.prototype.current = function() {
  return this.currentIdx;
};
RangeSeq.prototype.next = function () {
  if (this.currentIdx >= this.to)
    return false;
  this.currentIdx++;
  return true;
};

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
