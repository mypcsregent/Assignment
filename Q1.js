/*1. write a function which has to call 2 different callback functions. 
The response of first function should be passed to second function 
and response of second function should be returned as response*/

function Cube_summ(summ)
{
    var x= summ*summ*summ;
    return x;
}

function Odd_Even(N,callback){
    if (N%2===0) {
        console.log("The sum is even, The sum will be halved");
        return callback(N/2);
    }
    else{
    console.log("The Sum is odd, the sum will be doubled");
    return callback(N*2);
    }
}

function add_no(num1,num2,callback) {
    var summ=num1+num2;
    console.log(`Sum of Num1 = ${num1} and Num2 = ${num2} is ${summ} `);
    return callback(summ,Cube_summ)
}


console.log(`Final Result ${add_no(5,5,Odd_Even)}`)

//First function finds the sum and calls a callback function which finds whether the sum is even or odd.
//If the sum is odd then the sum will be doubled. If it is even then will the sum will be halved 
//and the result will be sent as a response to the second callback function
//The second function will find the cube.