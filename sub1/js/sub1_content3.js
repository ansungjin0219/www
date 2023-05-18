$('.nav_history a').click(function(e){
  e.preventDefault(); //href="#" 속성을 막아주는..메소드

   var value=0; //이동할 스크롤의 거리

   if($(this).hasClass('y2023_link')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
      value= $('.y2023_img').offset().top-100;  // 해당 콘테츠의 상단의 거리~~
   }else if($(this).hasClass('y2013_link')){
      value= $('.y2013_img').offset().top-100; 
   }else if($(this).hasClass('y2008_link')){
      value= $('.y2008_img').offset().top-100; 
   }else if($(this).hasClass('y2004_link')){
      value= $('.y2004_img').offset().top-100; 
   }
   
 $("html,body").stop().animate({"scrollTop":value},1000);
});




    //첫번째 서브메뉴 활성화
    
   //  $('#content div:eq(0)').addClass('boxMove');
   //  //첫번째 내용글 애니메이션 처리
    var smh= $('.visual').height()-100;  //메인 비주얼의 높이
    var mt= $('.nav_history').offset().top-100;
    var h1= $('.y2023_img').offset().top;
    var h2= $('.y2013_img').offset().top;
    var h3= $('.y2008_img').offset().top;
    var h4= $('.y2004_img').offset().top;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
      //   $('.text').text(scroll);
      //   //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        if(scroll>mt){ 
            $('.nav_history').addClass('nav_historyon');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
            $('.nav_history a').addClass('spy');
        }else{
            $('.nav_history').removeClass('nav_historyon');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }
        
        
        
        $('.nav_historyon li').find('a').removeClass('spy2');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        
         //스크롤의 거리의 범위를 처리
        if(scroll>=h1 && scroll<h2){
            $('.nav_historyon li:eq(0)').find('a').addClass('spy2');
            //첫번째 서브메뉴 활성화
            
            // $('#content div:eq(0)').addClass('boxMove1');
            // //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=h2 && scroll<h3){
            $('.nav_historyon li:eq(1)').find('a').addClass('spy2');
            //두번째 서브메뉴 활성화
            
            //  $('#content div:eq(1)').addClass('boxMove2');
        }else if(scroll>=h3 && scroll<h4){
            $('.nav_historyon li:eq(2)').find('a').addClass('spy2');
            //세번째 서브메뉴 활성화
            
            //  $('#content div:eq(2)').addClass('boxMove3');
        }else if(scroll>=h4){
            $('.nav_historyon li:eq(3)').find('a').addClass('spy2');
            //네번째 서브메뉴 활성화
            
            //  $('#content div:eq(3)').addClass('boxMove4');
        }
        
        
        
     /*   
        //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<500){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('#content div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=500 && scroll<1100){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
             $('#content div:eq(1)').addClass('boxMove');
        }else if(scroll>=1100 && scroll<1500){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('#content div:eq(2)').addClass('boxMove');
        }else if(scroll>=1500){
            $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
             $('#content div:eq(3)').addClass('boxMove');
        }
        
    */    
        
    });