$(function() {
  var item, status, eventType;

  $('ul').on('click mouseover', ':not(#four)', {status: 'important'}
    , function(e) {
      item = 'Item: ' + e.target.textContent + '<br />';
      status = 'Status: ' + e.data.status + '<br />';
      eventType = 'Event: ' + e.type;
      $('#notes').html(item + status + eventType);
      e.preventDefault();
    });
})
