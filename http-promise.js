function all(promises) {
  return new Promise(function(succeed, fail) {
    var results = [], pending = promises.length;
    promises.forEach(function(promise, i) {
      promise.then(function(result) {
        results[i] = result;
        pending -= 1;
        if (pending == 0)
          succeed(results);
      }, function(error) {
        fail(error);
      });
    });
    if (promises.length == 0)
      succeed(results);
  });
}

function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
function fail() {
  return new Promise(function(success, fail) {
    fail(new Error("Error!"));
  });
}

all([soon(1), fail(), soon(3)]).then(function(array) {
  console.log("We should not get here");
}, function(error) {
  console.log(error.message);
});
