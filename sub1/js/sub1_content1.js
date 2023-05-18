$('.company_overview').waypoint(function() {    //스크롤링시 효과가 발생할 요소의 클래스나 아이디명.
  $('.company_overview').addClass('animated fadeInLeft');
}, {
  offset: '50%'            //스크롤과의 거리
});
$('.core_value').waypoint(function() {
  $('.core_value h3').addClass('animated fadeInUp');
  $('.core_value li:eq(0)').addClass('animated fadeInUp');
  $('.core_value li:eq(1)').addClass('animated fadeInUp');
  $('.core_value li:eq(2)').addClass('animated fadeInUp');
  $('.core_value li:eq(3)').addClass('animated fadeInUp');
}, {
  offset: '50%'
});        
$('.vision').waypoint(function() {
  $('.vision').addClass('animated fadeInDown');
}, {
  offset: '50%'
});