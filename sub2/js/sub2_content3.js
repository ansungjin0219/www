var memo = [
  {imgsrc:'content3/sub3_con5_01.png' ,title1:'CUCKOO', title2:'전기밥솥', content:'CUCKOO 본사와 협업하여 품질 좋은 상품을 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.'},
  {imgsrc:'content3/sub3_con5_02.png' ,title1:'CUCKOO', title2:'공기청정기', content:'CUCKOO 본사와 협업하여 품질 좋은 상품을 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.'},
  {imgsrc:'content3/sub3_con5_03.png' ,title1:'CUCKOO', title2:'정수기', content:'CUCKOO 본사와 협업하여 품질 좋은 상품을 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.'},
  {imgsrc:'content3/sub3_con5_04.png' ,title1:'CUCKOO', title2:'인덕션', content:'CUCKOO 본사와 협업하여 품질 좋은 상품을 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.'},
  {imgsrc:'content3/sub3_con5_05.png' ,title1:'CUCKOO', title2:'펫드라이룸', content:'CUCKOO 본사와 협업하여 품질 좋은 상품을 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.'},
  {imgsrc:'content3/sub3_con5_06.png' ,title1:'ANAM', title2:'LED HD', content:'ANAM 본사와 협업하여 품질 좋은 상품을 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.'},
  {imgsrc:'content3/sub3_con5_07.png' ,title1:'ANAM', title2:'LED UHD', content:'ANAM 본사와 협업하여 품질 좋은 상품을 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.'},
  {imgsrc:'content3/sub3_con5_08.png' ,title1:'PHILIPS', title2:'면도기', content:'PHILIPS 본사와 협업하여 품질 좋은 상품을 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.'},
  {imgsrc:'content3/sub3_con5_09.png' ,title1:'PHILIPS', title2:'다리미', content:'PHILIPS 본사와 협업하여 품질 좋은 상품을 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.'},
  {imgsrc:'content3/sub3_con5_10.png' ,title1:'PHILIPS', title2:'에어프라이어', content:'PHILIPS 본사와 협업하여 품질 좋은 상품을 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.'}
];
var ind = 0;  //전역변수
var txt =''; // 태그 생성
var total = $('.product_inner ul dl').size(); //총개수 4
//var total = memo.length; 

function popchange(){
  //$('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
  $('.product_inner .popup img').attr('src','./images/'+memo[ind].imgsrc);
  txt ='';
  txt+= '<span>'+memo[ind].title1+'</span>';
  txt+= '<strong>'+memo[ind].title2+'</strong>';
  txt+= '<p>'+memo[ind].content+'</p>';
  
  $('.product_inner .popup .txt').html(txt);
}

$('.product_inner ul dl').click(function(e){
  e.preventDefault();
  
  ind = $(this).index('.product_inner ul dl');  // 0 1 2 3

  $('.product_inner .modal_box').fadeIn('fast');
  $('.product_inner .popup').fadeIn('slow');
  $('.pop_btn').fadeIn('slow');
  $('header').fadeOut('fast');  

  popchange();

});

$('.close_btn,.product_inner .modal_box').click(function(e){
  e.preventDefault();
  $('.product_inner .modal_box').hide();
  $('.product_inner .popup').hide();
  $('.pop_btn').fadeOut('fast');
  $('header').fadeIn('slow');
  });


$('.pop_btn a').click(function(e){
  e.preventDefault();

  $('.product_inner .popup').hide().fadeIn('slow'); //fade효과 
  
  if($(this).hasClass('pre')){  //이전버튼 클릭
      if(ind==0)ind=total;  // 10 9 8.. 0 10 9 8.. 0 ...
      ind--;
      popchange();
  }else if($(this).hasClass('next')){  //다음버튼 클릭
      if(ind==total-1)ind=-1;  // 0 1 2 3.. 10 0 1 2 3...
      ind++;
      popchange();
  }

});





