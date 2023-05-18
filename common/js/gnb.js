//글로벌네비게이션 코드 작성
var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
var on_off=false;  //false(안오버)  true(오버)  마우스가헤더위에올라간상태로 스크롤내리고올리고 상황 가정

    $('#headerArea').mouseenter(function(){                       //*****마우스를 헤더위에 올릴때
       // var scroll = $(window).scrollTop();
        $(this).css('background','#fff');
        $('.dropdownmenu li a').css('color','#333'); 
        $('.top_menu li a').css('color','#333'); 
       
        on_off=true;                                     
    });                            
 
   $('#headerArea').mouseleave(function(){             //*****마우스를 헤더에서 땠을때지만 스크롤위에서땠나 아래에서땠나 두가지경우
        var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
        
        if(scroll<smh-100 ){ //현재 스크롤의 위치가 비주얼 이미지가 보이는 위치면..
            $(this).css('background','rgba(0,0,0,0.5)').css('border-bottom','none'); 
            $('.dropdownmenu li a').css('color','#fff');
            $('.top_menu li a').css('color','#fff');
        }else{  //메뉴가 비주얼 영역을 벗어났다면..
            $(this).css('background','#fff'); 
            $('.dropdownmenu li a').css('color','#333');
            $('.top_menu li a').css('color','#333');
        }
       on_off=false;    
   });
   
   //스크롤의 위치변화가 생기면 발생하는 이벤트 -> scroll              
   //$(window).on('scroll',function(){//실행코드});
   $(window).on('scroll',function(){//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
        //console.log(scroll);

        if(scroll>smh-100){//스크롤300까지 내리면
            $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
            $('.dropdownmenu li a').css('color','#333');
            $('.top_menu li a').css('color','#333');
            
        }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
           if(on_off==false){ //마우스가 헤더위에없으면! 그래서 가정만들어놓은거임 헤더에서 마우스가 벗어난상태
                $('#headerArea').css('background','rgba(0,0,0,.5)').css('border-bottom','none');
                $('.dropdownmenu li a').css('color','#fff');
                $('.top_menu li a').css('color','#fff');
           }
        }; 
        
     });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:320},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:100},'fast').clearQueue();
     });
    
     //1depth 효과
    //  $('ul.dropdownmenu li.menu').hover(
    //    function() { 
    //        $('.depth1::after',this).css('display','block');
    //    },function() {
    //       $('.depth1',this).css('border-bottom','none');
    //  });
     //2depth 효과
     $('ul.dropdownmenu li.menu ul a').hover(
        function() { 
            $(this).css('color','red').css('font-weight', '700');
        },function() {
           $(this).css('color','#333').css('font-weight', '400');
      });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:200},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:50},'normal').clearQueue();
    });


    //패밀리사이트 코드 작성
       /*	
	$('.select .arrow').click(function(){
		$('.select .aList').fadeIn('slow');			  
	});

	$('.select .aList').mouseleave(function(){
		$(this).fadeOut('fast');			  
	});
  */
	$('#footerArea .fs').toggle(function(){
		$('#footerArea .fs_list').fadeIn('fast');
        $('.fs span.fs3').hide();
        $('.fs span.fs4').show();
        $('#footerArea .fs').css('background', 'red')
	},function(){
        $('#footerArea .fs_list').fadeOut('fast');	
        $('.fs span.fs4').hide();
        $('.fs span.fs3').show();
        $('#footerArea .fs').css('background', '#0c2340')
	});

	//tab키 처리
    $('#footerArea .fs').on('focus', function () {        
            $('#footerArea .fs_list').fadeIn('slow');	
    });
    $('#footerArea .fs_list li:last a').on('blur', function () {        
            $('#footerArea .fs_list').fadeOut('fast');
    });

    
    //top버튼
    $('.top_move').hide();
           
        $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
            var scroll = $(window).scrollTop(); //스크롤의 거리
            var winh = $(window).height()/2; //모니터의 height값 빼내온다 모니터의 1/4을 변수에담아놓음

            if(scroll>winh){ //모니터의 1/4이상의 거리가 발생되면
                $('.top_move').fadeIn('slow');  //top보여라~~~~
            }else{
                $('.top_move').fadeOut('fast');//top안보여라~~~~
            }
        });
    
    $('.top_move').click(function(e){
        e.preventDefault();
            //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({"scrollTop":0},500); 
        });