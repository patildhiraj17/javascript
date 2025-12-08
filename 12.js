let arr = ["a","b","c","d","e"];
// let number = 6;

function printArray(arr, number) {
    if (number > arr.length) {
            console.log("Number is greater than array length");
        }
        else if(number < 0){
            console.log("Number is nagative");
        } 
           else {
            for (let i = 0; i < number; i++) {
                console.log(arr[i]);
            }
        }


        } 

    
    

printArray(arr,2);
