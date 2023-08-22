//Find Out Fibonacci Series
function printFibonacciSeries(n){
    let n1=0;
    let n2=1;
    let n3 =null;
    for(let i=1; i<=n; i=i+1){
        console.log(n1+"");
        n3=n1+n2;
        n1=n2;
        n2=n3;
    }
}
printFibonacciSeries(10)
