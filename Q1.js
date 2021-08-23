function Func1(num1,num2,callback){
    var summ=num1+num2;
    return callback(summ);
}

function callbackforF2(z) {
    console.log(`Result of F2: ${z}`);
    return z;
}

function Func2(N,callback) {
    var Z= N*N;
    return callback(Z);
}


function Func3(N,callback) {
    callback (N*N*N);
}

function BaseFunction(){
    var num1=-5, num2=7;

    var ResultOfF1= Func1(num1,num2,(summ)=> {
        if(summ>=0) console.log(`sum of ${num1} and ${num2} is Positive`);
        else console.log(`sum of ${num1} and ${num2} is Negative`);
        return summ;
    });
    console.log(`Result of F1: ${ResultOfF1}`);

    var n;
    if(ResultOfF1>=0) n=1;
    else n=-1;
    var N= ResultOfF1*n;

    var ResultofF2=Func2(N,callbackforF2);
    
    var N2= ResultOfF1+ResultofF2;
    var N3;
    if (N2%2===0) N3=num1;
    else N3=num2;
    var X=(N3==num1? num2: num1);
    console.log(`chosen number: ${N3} instead of ${X}`);

    Func3(N3, (cubes)=>{ console.log(`Result of the third Function : ${cubes}`)});
}

BaseFunction();
