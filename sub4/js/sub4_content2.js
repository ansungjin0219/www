$('.welfare').waypoint(function() {    //스크롤링시 효과가 발생할 요소의 클래스나 아이디명.
  $('.welfare').addClass('animated fadeInLeft');
}, {
  offset: '50%'            //스크롤과의 거리
});
// $('.wp2').waypoint(function() {
//   $('.wp2').addClass('animated fadeInUp');
// }, {
//   offset: '75%'
// });        
// $('.wp3').waypoint(function() {
//   $('.wp3').addClass('animated fadeInDown');
// }, {
//   offset: '50%'
// });
// $('.wp4').waypoint(function() {
//   $('.wp4').addClass('animated fadeInDown');
// }, {
//   offset: '75%'
// });
// $('.wp5').waypoint(function() {
//   $('.wp5').addClass('animated fadeInRight');
// }, {
//   offset: '75%'
// });