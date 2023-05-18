// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.556911,126.918694);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"강남그린컴퓨터아트학원"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "서울특별시 강남구 강남대로 428 만이빌딩"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
 }

