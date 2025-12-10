// find b number 
/*
let arr=[3,5,7,2,8,1];
function findBigNumber(arr) {
    let maxNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>maxNumber){
            maxNumber = arr[i];
            {
                maxNumber = arr[i];
            }
        }
            }
            console.log("b number is :",maxNumber);
        }
findBigNumber(arr);
*/


//find min value of arry
/*
let arr=[3,5,7,2,8,1];
function findMinNumber(arr) {
    let minNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }
    console.log("min number is :", minNumber);
}
findMinNumber(arr);
*/

//find big and small valeue  useing dynamic function
/*
function dynamic(arr,findvalue)
       {
    if(findvalue=="big value"){
        let maxNuber = 0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]>maxNuber){
                maxNuber = arr[i];
            }
        }  
        console.log("b number is :",maxNuber);
    }
    else if(findvalue=="small value"){
        let minNumber = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < minNumber) {
                minNumber = arr[i];
            }
        }
        console.log("min number is :", minNumber);
    }
    else{
        console.log("invalid input");
    }
}
dynamic([3,5,7,2,8,1],"small value");
dynamic([3,5,7,2,8,1],"big value");
*/

// find 2biggest number
 /*
function find2BigNumber(arr) {
    let maxNuber = 0;
    let secondMax = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNuber) {
            secondMax = maxNuber;
            maxNuber = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] != maxNuber) {
            secondMax = arr[i];
        }
    }
    console.log("2nd big number is :", secondMax); 
}
find2BigNumber([3, 5, 7, 2, 8, 1]);
*/


//avaregae of array => [10,2,3,4,5] => 10+2+3+4+5 => 24 => 24/5 => 4.8
/*
// fine 2small number 
/*
function find2SmallNumber(arr) {
    let minNumber = arr[0];
    let secondMin = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            secondMin = minNumber;
            minNumber = arr[i];
        }
        else if (arr[i] < secondMin && arr[i] != minNumber) {
            secondMin = arr[i];
        }
    }
    console.log("2nd small number is :", secondMin);
}
find2SmallNumber([10,23,54,1,2,56,0,87,34]);
*/

//min value => [1,2,3,4,5] => 3 , [1,2,3,4] => [2,3]
/*
function findMinValue(arr) {
    arr.sort(function(a, b){return a-b});
    let minValue;
    if(arr.length % 2 != 0){
        let midIndex = Math.floor(arr.length / 2);
        minValue = arr[midIndex];
    }
    else{
        let midIndex1 = (arr.length / 2) - 1;
        let midIndex2 = arr.length / 2;
        minValue = (arr[midIndex1] + arr [midIndex2]) / 2;
    }
    console.log("min value is :", minValue);
}
findMinValue([1,2,3,4,5]);
findMinValue([1,2,3,4]);
*/
//avaregae of array => [10,2,3,4,5] => 10+2+3+4+5 => 24 => 24/5 => 4.8

/*

function averageOfArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];

    }
    let avaregae=sum/arr.length;
    console.log("avaregae is :",avaregae);
}
averageOfArray([100,200,300,400,500]);

*/
