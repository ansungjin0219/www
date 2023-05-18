//sub2_1, sub2_3 공통 제이쿼리

//var cnt=3;  //탭메뉴 개수 ***
$('.service_overview1').show(); // 첫번째 탭 내용만 열어라
$('.digital1').show(); 
$('.nav_business a:eq(0)').addClass('current'); //첫번째 탭메뉴 활성화
          //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
  
$('.nav_business a').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      var ind = $(this).index('.nav_business a');  // 클릭시 해당 index를 뽑아준다
      //var ind = $(this).parent().index();  
      //console.log(ind);

      $('.service_overview1, .service_overview2').hide(); //모든 탭내용을 안보이게...
      $('.service_overview'+(ind+1)).show(); //클릭한 해당 탭내용만 보여라
      $('.digital1, .digital2').hide();
      $('.digital'+(ind+1)).show();

      $('.nav_business a').removeClass(); //모든 탭메뉴를 비활성화
      $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

});

