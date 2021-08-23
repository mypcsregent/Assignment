function Func1(num1,num2) {
    var summ=num1+num2;
    return new Promise(function(resolve,reject){

        if(isNaN(num1) || isNaN(num2)){
			reject('invalid parameters');
        }
        else{
            if(summ>=0) console.log(`sum of ${num1} and ${num2} is Positive`);
            else console.log(`sum of ${num1} and ${num2} is Negative`);
            return resolve(summ);
    }
    });
}

function Func2(N,ResultOfF1) {
    return new Promise((resolve,reject)=>{
        if(isNaN(N)){
			reject('invalid parameters');
        }
        else{
            var Z= N*N;
            resolve ([Z,ResultOfF1]);
    }
});
}

function Func3(Z) {
    console.log(`Resulf of F3:${Z*Z*Z}`);
}

function BaseFunction() 
{
    var N1=-5,N2=7;
    Func1(N1,N2).then(ResultOfF1=> {
        console.log(`Result of F1: ${ResultOfF1}`);
        var n;
        if(ResultOfF1>=0) n=1;
        else n=-1;
        var N= ResultOfF1*n;
        return Func2(N,ResultOfF1);
    })
    .then(L=>{
        var ResultofF2=L[0],ResultOfF1=L[1];
        console.log(`Result of F2: ${ResultofF2}`);
        var Nk= ResultOfF1+ResultofF2;
        var N3;
        if (Nk%2===0) N3=N1;
        else N3=N2;
        var X=(N3==N1? N2: N1);
        console.log(`chosen number: ${N3} instead of ${X}`);
        return Func3(N3);
    })
    .catch(message => console.log(message));
}

BaseFunction();

