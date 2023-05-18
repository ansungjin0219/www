$('.talent_gallery .img li:first').fadeIn('fast');
$('.talent_gallery .img li:first h4').fadeIn(2000);
$('.talent_gallery .img li:first p').fadeIn(2000);
$('.talent_gallery .imglist li:eq(0)').find('img').css('filter','grayscale(1)');

$('.talent_gallery .imglist a').click(function(e){
    e.preventDefault();
    var ind = $(this).index('.talent_gallery .imglist a')

    $('.talent_gallery .img li').hide();
    $('.talent_gallery .img li:eq('+ind+')').fadeIn('fast');
    $('.talent_gallery .img li:eq('+ind+') h4').hide().fadeIn(2000);
    $('.talent_gallery .img li:eq('+ind+') p').hide().fadeIn(2000);

    
    $('.talent_gallery .imglist img').css('filter','grayscale(0)');
    $(this).find('img').css('filter','grayscale(1)');
  });