function marks(marks){
    if(marks<0 ){
        console.log("invalid marks");
        }
        else if(marks >100){
            console.log("marks can't hire then 100");
        }
       else if(marks<=36){
        console.log("failed");
        }
     else if(marks<=50){
        console.log("D");
     }
        else if(marks<=60){
            console.log("C");
        }
            else if(marks<=70){
                console.log("B");
            }
                else if(marks<=80){
                    console.log("A");
                }
                    else{
                        console.log("A+");
                    }
}
marks(105);
marks(45);
marks(-10); 



  
     