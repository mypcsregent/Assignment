function Func1(num1,num2,callback){
    
    setTimeout(() => {
        var summ=num1+num2;
        console.log("Func1 is waited 5 s");
        return callback(summ);
    }, 5000);
    
}


function Func2(N,callback) {
    setTimeout(() => {
        console.log("Func2 is waited 5 s");
        var Z= N*N;
        return callback(Z);
    }, 5000);
    
}


function Func3(N,callback) {
    callback (N*N*N);
}

function BaseFunction(){
    var num1=-5, num2=7;

    Func1(num1,num2,(ResultOfF1)=> {
        if(ResultOfF1>=0) console.log(`sum of ${num1} and ${num2} is Positive`);
        else console.log(`sum of ${num1} and ${num2} is Negative`);
        console.log(`Result of F1: ${ResultOfF1}`);
        var n;
        if(ResultOfF1>=0) n=1;
        else n=-1;
        var N= ResultOfF1*n;
        Func2(N,(ResultofF2)=>{
            console.log(`Result of F2: ${ResultofF2}`);
            var N2= ResultOfF1+ResultofF2;
            var N3;
            if (N2%2===0) N3=num1;
            else N3=num2;
            var X=(N3==num1? num2: num1);
            console.log(`chosen number: ${N3} instead of ${X}`);

            Func3(N3, (cubes)=>{ console.log(`Result of the third Function : ${cubes}`)});
        });

    });
    
    
}

BaseFunction();
