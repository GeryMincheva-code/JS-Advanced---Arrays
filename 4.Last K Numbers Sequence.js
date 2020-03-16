function solve(n,k){
let numberSequence=[1];
while(numberSequence.length<n){
let lastNumbers=numberSequence.slice(-k);
let sum = lastNumbers.reduce((a,b)=>a+b);
numberSequence.push(sum);
}
console.log(numberSequence);

}
solve(6,3);
//1 1 2 4 7 13