//클래스 hide랑 show를 만들어서 태그에 클래스 hide주면 닫히고 show주면 열린다 가정법해서 만든거임
// 그래야 클릭할때 if문에서 hide면 컨텐츠를 열어주고 show라는 클래스를 줘라해서
//한번더 클릭할때는 이제 show상태가 될거아님 그럼 닫고 다시 hide라는 클래스주고~ 그래서 그렇게 돌고도는거~
var article = $('.content_area ul li');  //모든 질문 답변 리스트
	//article.find('.a').slideUp(100); // 모든 답변 닫아라
    article.find('span').html('<i class="fas fa-chevron-down"></i>');
    $('.content_area ul li:first').find('.a').slideDown(100);
    $('.content_area ul li:first').find('span').html('<i class="fas fa-chevron-up"></i>');
	
	$('.content_area ul li a').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('li'); //클릭한 해당 list 
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.a').slideUp(100); //모든 답변을 닫아라
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            article.find('span').html('<i class="fas fa-chevron-down"></i>'); // <- 이3줄은 내가클릭한얘 클릭했으면 나머지 열려있는건 다 닫혀라 뜻
                                    // ㄴ 맨오른쪽 아이콘들

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('span').html('<i class="fas fa-chevron-up"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('span').html('<i class="fas fa-chevron-down"></i>');
        }  
  });
  
  //모두 여닫기 처리
  $('.all').toggle(function(e){
        e.preventDefault(); 
        article.find('.a').slideDown(100);
        article.removeClass('hide').addClass('show');
        article.find('span').html('<i class="fas fa-chevron-up"></i>');
        $(this).html('답변 모두 닫기 <span class="material-symbols-outlined">expand_less</span>')
  },function(e){
        e.preventDefault(); 
        article.find('.a').slideUp(100);
        article.removeClass('show').addClass('hide');
        article.find('span').html('<i class="fas fa-chevron-down"></i>');
        $(this).html('답변 모두 열기 <span class="material-symbols-outlined">expand_more</span>')
        
  });