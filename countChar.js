function countChar(string, letter) {
  var count = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) === letter)
      count++;

  return console.log(count);
}

function countBs(string) {
  countChar(string, "B");
}

countBs("gBhjdshjkhBdhjhd", "b")
