$('.use_way').waypoint(function() {  //스크롤링시 효과가 발생할 요소의 클래스나 아이디명.
    $('.use_way').addClass('animated fadeInDown');
  }, {
    offset: '50%'    //스크롤과의 거리
  });
  $('.service_hours1').waypoint(function() {
    $('.service_hours1').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });
  $('.service_hours2').waypoint(function() {
    $('.service_hours2').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });