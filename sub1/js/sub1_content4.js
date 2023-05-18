 //var cnt=3;  //탭메뉴 개수 ***
$('.map1').show(); // 첫번째 탭 내용만 열어라
$('.tab a:eq(0)').addClass('tab_a1'); //첫번째 탭메뉴 활성화
            //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
$('.tab a').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
        var ind = $(this).index('.tab a');  // 클릭시 해당 index를 뽑아준다
        //var ind = $(this).parent().index();  
        //console.log(ind);
        $('.map_box').css('overflow','visible').css('height','auto');

        $(".map_box>div").hide(); //모든 탭내용을 안보이게...
        $(".map_box>div:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
        $('.tab a').removeClass(); //모든 탭메뉴를 비활성화
        $(this).addClass('tab_a1'); // 클릭한 해당 탭메뉴만 활성화
    });

 
 
 
