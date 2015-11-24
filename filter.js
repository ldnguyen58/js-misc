(function() {
  var people = [
    {name: 'Casey', rate: 80},
    {name: 'Camile', rate: 70},
    {name: 'Gordon', rate: 120}
  ];
  var rows = [],
      $min = $('#value-min'),
      $max = $('#value-max'),
      $table = $('#rates');

  function makeRows() {
    people.forEach(function (person) {
      var $row = $('<tr></tr>');
      $row.append( $('<td></td>').text(person.name) );
      $row.append( $('<td></td>').text(person.rate) );
      rows.push({
        person: person,
        $element: $row
      });
    });
  }

  function appendRows() {
    var $tbody = $('<tbody></tbody>');
    rows.forEach(function (row) {
      $tbody.append(row.$element);
    });
    $table.append($tbody);
  }

  function update(min, max) {
    rows.forEach(function (row) {
      if (row.person.rate >= min && row.person.rate <= max) {
        row.$element.show();
      } else {
        row.$element.hide();
      }
    });
  }

  function init() {
    var slider = document.getElementById('slider');
    noUiSlider.create(slider, {
    	range: { 'min': 0, 'max': 150 },
      start: [ 65, 90 ], // Handle start position
      handles: 2,
    	margin: 20, // Handles must be more than '20' apart
    	connect: true, // Display a colored bar between the handles
    });

    slider.noUiSlider.on('update', function( values, handle ) {
      var value = values[handle];
      if ( handle ) {
    		$max.val(value);
    	} else {
    		$min.val(value);
    	}
      update($min.val(), $max.val());
    });

    $min.on('change', function(){
    	slider.noUiSlider.set([this.value, null]);
    });

    $max.on('change', function(){
    	slider.noUiSlider.set([null, this.value]);
    });

    makeRows();
    appendRows();
    update($min.val(), $max.val())
  };

  $(init);
}());
