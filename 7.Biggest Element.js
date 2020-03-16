function solve(input){
let result=input.reduce((a,b)=>a.concat(b)).sort((a,b)=>a-b);    
console.log(result.pop());

}
solve([[20, 50, 10],
    [8, 33, 145]]
   
   );