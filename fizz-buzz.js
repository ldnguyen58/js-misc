for (i = 29; i <= 39; i++) {
  var s = '';
  if (i % 3 === 0)
    s = 'Fizz';
  if (i % 5 === 0)
    s += 'Buzz';
  console.log(s || i);
}
