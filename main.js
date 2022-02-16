
 
var counter =  document.querySelector('.counter' );
var counter1 = document.querySelector('.counter1');
var counter2 = document.querySelector('.counter2' );
var counter3 = document.querySelector('.counter3' );

let count = count2 = 0;
let count1 = count3 = 0;

function changeCounter(button){


    if(button == goal){
        count += 1;
      
        
    }else if(button == goal1){
       
        count2 += 1;
        
    }else if(button == foul){

        count1 += 1;
      
    }else if(button == foul1){

        count3 += 1;
        
    }else if(button == reset){
        count =  count2 = 0;
        count1 =  count3 = 0;
    }

    counter.innerHTML = count;
    counter1.innerHTML = count1;
    counter2.innerHTML = count2;
    counter3.innerHTML = count3;
}
   