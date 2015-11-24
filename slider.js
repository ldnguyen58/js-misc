$('.slide-viewer').each(function () {
  var $this = $(this);
  var $group = $this.find('.slide-group');
  var $slides = $this.find('.slide');
  var buttonArray = [];
  var currentIndex = 0;
  var timeout;

  function move(index) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === index) {
      return;
    }

    buttonArray[currentIndex].removeClass('active');
    buttonArray[index].addClass('active');

    if (index > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    $slides.eq(index).css( {left: slideLeft, display: 'block'});
    $group.animate( {left: animateLeft}, 'slow', function() {
      $slides.eq(currentIndex).css( {display: 'none'} );
      $slides.eq(index).css( {left: 0} );
      $group.css( {left: 0} );
      currentIndex = index;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < $slides.length - 1) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 400000);
  }

  $.each($slides, function(index) {
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {
      $button.addClass('active');
    }

    $button.on('click', function() {
      move(index);
    }).appendTo('.slide-buttons');
    buttonArray.push($button);
  });

  advance();
});
