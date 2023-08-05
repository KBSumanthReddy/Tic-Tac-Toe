let text = 'X';
        let p = document.getElementsByClassName("boxtext");
        function textchange(i){
            if(p[i].innerHTML==""){
                let n=0;
                p[i].innerHTML = text;
                for (let i = 0; i < 9; i+=3) {
                    if(p[i].innerHTML!="" && p[i].innerHTML==p[i+1].innerHTML && p[i+1].innerHTML == p[i+2].innerHTML){
                        n=1;
                    }
                }
                for (let j = 0; j < 3; j++) {
                    if(p[j].innerHTML!="" && p[j].innerHTML==p[j+3].innerHTML && p[j+3].innerHTML == p[j+6].innerHTML){
                        n=1;
                    }
                }
                if(p[0].innerHTML!="" && p[0].innerHTML==p[4].innerHTML && p[4].innerHTML == p[8].innerHTML){
                    n=1;
                }
                if(p[2].innerHTML!="" && p[2].innerHTML==p[4].innerHTML && p[4].innerHTML == p[6].innerHTML){
                    n=1;
                }
                win(n);
                if(text=='X'){text = 'O';}
                else{text = 'X';}
            }
        }
        function win(n){
            if(n==1){
                alert(`${text} wins`);
                setTimeout(reset, 300);
            }
        }
        function reset(){
            for (let index = 0; index < 9; index++) {
                p[index].innerHTML="";
            }
            text = 'X';
        }