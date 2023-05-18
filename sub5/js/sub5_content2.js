//jquery ajax의 문법형식
   /*
      $.ajax({
        url: json파일 경로, 
        dataType: 파일종류(형식),
        success: function(data){ //파일의 접근이 완료되면 이게 계산이됌 data 매개변수에 제이슨파일에있는 객체배열이 텍스트형태가아닌 객체형태로 다들어옴
                
        }
        
      });
   */

      $.ajax({
        url: './data/sub5_2.json',
        dataType: 'json',
        success: function(data){
            var useData = data.fin; // 객체배열이 저장된다!
            
            function dataPrint(){   //출력할 dataPrint라는 함수하나 만든거임
                
                    var txt = '<h3>요약재무제표</h3>';
                        txt += '<span>(단위 : 원)</span>'
                        txt += '<table>';
                        txt += '<thead><tr><th scope="col">과목</th><th scope="col">제 21기(2021. 12. 31)</th><th scope="col">제 20기(2020. 12. 31)</th><th scope="col">제 19기(2019. 12. 31)</th></tr></thead>';
                        txt += '<tbody>';
                    //for(var i=0; i<useData.length; i++)
                    for(var i in useData){
                        
                        var $subject = useData[i].subject;
                        var $st21 = useData[i].st21;
                        var $st20 = useData[i].st20;
                        var $st19 = useData[i].st19;
 
                        txt+='<tr>';
                        txt+='<th scope="low">'+$subject+'</th>';
                        txt+='<td>'+$st21+'</td>';
                        txt+='<td>'+$st20+'</td>';
                        txt+='<td>'+$st19+'</td>';
                        txt+='</tr>';
                    }
                    txt += '</tbody>';
                    txt += '<tfoot><tr><th scope="low">자산총계</th><td>369,360,805,550</td><td>294,288,884,757</td><td>311,822,912,174</td></tr></tfoot>';
                    txt += '</table>';
 
                    $('.finance').html(txt);
               
            };
            
            //초기실행, 함수호출
            dataPrint();
        } 
    });