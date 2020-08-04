  document.getElementById('pinInput').value = "";
        document.getElementById('screen').value = "";
        let attempt  = 3;
        
     
        function randomNumber(){
            let num = 1000 + Math.round(Math.random() * 9000);
            document.getElementById('pinInput').value = num;
        }
        
        function numPad(num){
            document.getElementById('screen').value += num;
        }
       
        function allClear(){
            document.getElementById('screen').value = '';
        }
        
        function backSpace(){
            let screen = document.getElementById('screen').value;
            let backSpace = screen.slice(0, screen.length - 1 );
            document.getElementById('screen').value = backSpace;
        }
        
        function submit(){
            const randomPin = document.getElementById('pinInput').value;
            const screen = document.getElementById('screen').value;
        
            if( randomPin == screen && randomPin != '' && screen != '' ){
                message('rightPin', 'wrongPin');
                document.getElementById('pinInput').value = "";
                document.getElementById('screen').value = "";
                
            }
            else {
                attempt--;
                document.getElementById('tryCount').innerText = attempt;
                document.getElementById('screen').value = "";
                message('wrongPin', 'rightPin');
                   if ( attempt == 0 ){   
                    message('ifFailed', 'numberPad');
                    document.getElementById('wrongPin').style.display = 'none';
                   }           
                }
            }
        

        function message(show, hide){
            document.getElementById(show).style.display = 'block';
            document.getElementById(hide).style.display = 'none';
        }