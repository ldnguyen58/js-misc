document.querySelector("#button").addEventListener("click", function() {
  var code = document.querySelector("#code").value;
  var outputNode = document.querySelector("#output");
  var output = new Function(code)();
  outputNode.innerText = String(output);
});
