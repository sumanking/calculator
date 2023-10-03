
        let currentexpression='';
        function addtodisplay(value){
            currentexpression+=value;
            document.getElementById("display").value=currentexpression;
        }

        function clearr() {
            currentexpression = '';
            document.getElementById("display").value = '';
        }


        function result(){
            const finalresult=eval(currentexpression);
            document.getElementById("display").value=finalresult;
            currentexpression=finalresult;
            
        }

    