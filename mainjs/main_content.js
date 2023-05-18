//서비스사업 제이쿼리 영역
var cnt2=0;  // 0 1 2 3  
var total=0; //이미지의 총개수 4
$('#content .business1').fadeIn('slow');
total = $('#content .business_introduction ul:eq(0) li').size();  //총개수 4

$('#content .business_introduction .next').click(function(e){
  e.preventDefault();
  cnt2++; // 0 1 2 3 0 1 2 3~
  if(cnt2==total){
     cnt2=0;
  }
  $('#content .business_introduction ul:eq(0) li').hide(); // 다 보이지마!
  $('#content .business_introduction ul:eq(0) li:eq('+cnt2+')').fadeIn('slow');
});

$('.back').click(function(e){
  e.preventDefault();
  cnt2--; // 3 2 1 0 3 2 1 0~
  if(cnt2==-1){
     cnt2=total-1;
  }
  $('#content .business_introduction ul:eq(0) li').hide(); // 다 보이지마!
  $('#content .business_introduction ul:eq(0) li:eq('+cnt2+')').fadeIn('slow');
});


// 언론보도 제이쿼리 영역
var position=0;  //최초위치
//var movesize=150; //이미지 하나의 너비
var movesize=400;
//console.log(movesize);
var timeonoff2;

$('.media_report ul').after($('.media_report ul').clone());

function moveG() {
  if(position>=0){
    $('.mediareport_inner').css('left',-2000);
    position=-2000;
}

  position+=movesize; // 400씩 증가 (position에 movesize값을 계속 더해라)
  $('.mediareport_inner').animate({left:position}, 'fast',function(){							
          if(position>=0){
              $('.mediareport_inner').css('left',-2000);
              position=-2000;
          }
      }).clearQueue();
}

timeonoff2= setInterval(moveG, 3000);


$('.media_button').click(function(e){
 e.preventDefault();

 clearInterval(timeonoff2);
 
 if($(this).is('.mb1')){  //이전버튼 클릭
     
      position-=movesize;  // 400씩 감소 (position에 movesize값을 계속 빼라)
     $('.mediareport_inner').animate({left:position}, 'fast',function(){
        if(position<=-2000){
            position=0;
            $('.mediareport_inner').css('left',0);
         }
     }).clearQueue();  

 }else if($(this).is('.mb2')){  //다음버튼 클릭
       if(position>=0){
            $('.mediareport_inner').css('left',-2000);
            position=-2000;
        }

        position+=movesize; // 400씩 증가
        $('.mediareport_inner').animate({left:position}, 'fast',function(){							
                if(position>=0){
                    $('.mediareport_inner').css('left',-2000);
                    position=-2000;
                }
            }).clearQueue();

  }
});


//스크롤 이벤트 영역
    var smh= $('.main_visual').height()-300;
    var h1= $('.business_introduction').offset().top-500;
    var h2= $('.esg_management').offset().top-500 ;
    var h3= $('.media_report').offset().top-500 ;
    var h4= $('.notice').offset().top-500 ;
    var h5= $('.employment').offset().top-500 ;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
        $('.text').text(scroll);

        if(scroll<smh){
            
            $('.con1_textmove').removeClass('con1_textmove');
            $('.con1_imgmove1').removeClass('con1_imgmove1');
            $('.con1_imgmove2').removeClass('con1_imgmove2');
            $('.con1_iconmove').removeClass('con1_iconmove');
            $('.esg_textmove').removeClass('esg_textmove');
            $('.esg_conleftmove').removeClass('esg_conleftmove');
            $('.esg_conrightmove').removeClass('esg_conrightmove');
            $('.media_reportmove').removeClass('media_reportmove');
            $('.noticemove').removeClass('noticemove');
            $('.employmentmove').removeClass('employmentmove');
        }

         //스크롤의 거리의 범위를 처리
        if(scroll>=h1 && scroll<h2){
            $('.con1_text').addClass('con1_textmove');
            $('.con1_imgbox1').addClass('con1_imgmove1');
            $('.con1_imgbox2').addClass('con1_imgmove2');
            $('.con1_iconbox').addClass('con1_iconmove');
        }else if(scroll>=h2 && scroll<h3){
             $('.esg_text').addClass('esg_textmove');
             $('.esg_conleft').addClass('esg_conleftmove');
             $('.esg_conright').addClass('esg_conrightmove');
            console.log('두번째 애니메이션');
        }else if(scroll>=h3 && scroll<h4){
            console.log('세번째 애니메이션');
            $('.media_report').addClass('media_reportmove');
        }else if(scroll>=h4 && scroll<h5){
            console.log('네번째 애니메이션');
            $('.notice').addClass('noticemove');
        }else if(scroll>=h5){
            console.log('다섯번째 애니메이션');
            $('.employment').addClass('employmentmove');
        }
      
    });