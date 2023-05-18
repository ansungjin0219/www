// 주주구성 차트 불러오기
const data = {
    labels: [
      '주식회사 kt',
      '주식회사 kt is',
      '토터스 자산운영',
      '개인주주 1명',
      '기타'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [29.32, 6.75, 1.01, 1.07, 61.85],
      backgroundColor: [
        'rgb(54, 162, 235, 0.8)',
        'rgb(54, 159, 64, 0.8)',
        'rgb(255, 205, 86, 0.8)',
        'rgb(75, 192, 192, 0.8)',
        'rgb(255, 99, 132, 0.8)'
      ],
      hoverOffset: 5
    }]
  };
              
  const config = {
    type: 'doughnut',
    data: data,
  };
  
  const myChart = new Chart(
        document.getElementById('myChart'),
        config
  );

  
  //경영실적 제이슨파일 js

      $.ajax({
        url: './data/sub5_1.json',
        dataType: 'json',
        success: function(data){
            var useData = data.busifer; // 객체배열이 저장된다!
            
            function dataPrint(){   //출력할 dataPrint라는 함수하나 만든거임
                
                    var txt = '<h3>경영실적</h3>';
                        txt += '<span>(단위 : 백만원)</span>'
                        txt += '<table>';
                        txt += '<thead><tr><th scope="col">구분</th><th scope="col">2021</th><th scope="col">2020</th><th scope="col">2019</th><th scope="col">2018</th><th scope="col">2017</th><th scope="col">2016</th><th scope="col">2015</th></tr></thead>';
                        txt += '<tbody>';
                    //for(var i=0; i<useData.length; i++)
                    for(var i in useData){
                        
                        var $subject = useData[i].subject;
                        var $th2021 = useData[i].th2021;
                        var $th2020 = useData[i].th2020;
                        var $th2019 = useData[i].th2019;
                        var $th2018 = useData[i].th2018;
                        var $th2017 = useData[i].th2017;
                        var $th2016 = useData[i].th2016;
                        var $th2015 = useData[i].th2015;
 
                        txt+='<tr>';
                        txt+='<th scope="low">'+$subject+'</th>';
                        txt+='<td>'+$th2021+'</td>';
                        txt+='<td>'+$th2020+'</td>';
                        txt+='<td>'+$th2019+'</td>';
                        txt+='<td>'+$th2018+'</td>';
                        txt+='<td>'+$th2017+'</td>';
                        txt+='<td>'+$th2016+'</td>';
                        txt+='<td>'+$th2015+'</td>';
                        txt+='</tr>';
                    }
                    txt += '</tbody>';
                    txt += '</table>';
 
                    $('.business_performance').html(txt);
               
            };
            
            //초기실행, 함수호출
            dataPrint();
        } 
    });


    // 주식현황 제이슨파일 js

    $.ajax({
      url: './data/sub5_1.json',
      dataType: 'json',
      success: function(data){
          var useData = data.stst; // 객체배열이 저장된다!
          
          function dataPrint(){   //출력할 dataPrint라는 함수하나 만든거임
              
                  var txt = '<h3>주식현황</h3>';
                      txt += '<table>';
                  //for(var i=0; i<useData.length; i++)
                  for(var i in useData){
                      
                      var $subject = useData[i].subject;
                      var $content = useData[i].content;

                      txt+='<tr>';
                      txt+='<th scope="low">'+$subject+'</th>';
                      txt+='<td>'+$content+'</td>';
                      txt+='</tr>';
                  }
                  txt += '</table>';
                  txt += '<span>※ 당사는 2010년 3월 30일 주식의 액면가를 5,000원에서 500원으로 변경하였습니다.</span>'

                  $('.stock_status').html(txt);
             
          };
          
          //초기실행, 함수호출
          dataPrint();
      } 
  });