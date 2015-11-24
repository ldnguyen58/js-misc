var ul = document.getElementById('shoppingList');
if (ul.addEventListener) {
  ul.addEventListener('click', function(e) {
    removeItem(e);
  }, false);
} else {
  ul.attachEvent('onclick', function(e) {
    removeItem(e);
  });
}

function removeItem(e) {
  var target, parent, grandparent;

  if (!e) e = window.event;
  target = e.target || e.srcElement;
  parent = target.parentNode;
  grandparent = target.parentNode.parentNode;

  grandparent.removeChild(parent);

  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}
