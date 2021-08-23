/*write a function which has to call 2 different callback functions. 
The response of first function should be passed to second function 
and response of second function should be returned as response

Implement the same above requirement using promises.
*/

function cubes(Z){
    console.log(Z*Z*Z);
}

function odd_even(N){
    if (N%2===0) {
        console.log("The sum is even, The sum will be halved");
        var Z=N/2;
    }
    else{
        console.log("The Sum is odd, the sum will be doubled");
        var Z=N*2;
    }
    return new Promise(function(resolve,reject){
        resolve(cubes(Z));
    });
}

function Add_numbers(num1,num2){
    var Summ=num1+num2;
    return new Promise(function(resolve,reject){
        console.log(`Sum of Num1 = ${num1} and Num2 = ${num2} is ${Summ} `);
        resolve(odd_even(Summ));
    });
}

Add_numbers(5,4);