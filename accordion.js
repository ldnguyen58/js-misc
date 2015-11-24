// $(function() {
//   $('.accordion').on('click', '.accordion-control', function(e) {
//     e.preventDefault();
//     $(this).next('.accordion-panel')
//       .not(':animated')
//       .slideToggle(500);
//   });
// });

$.fn.accordion = function(speed) {
  this.on('click', '.accordion-control', function (e) {
    e.preventDefault();
    $(this).next('.accordion-panel')
      .not(':animated')
      .slideToggle(speed);
  });
}
