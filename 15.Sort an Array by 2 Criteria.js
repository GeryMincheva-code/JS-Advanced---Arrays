function solve(input){
input.sort((a,b)=>{
    if(a.length-b.length>0){ return 1;}
    if(a.length-b.length<0){return -1;}
    if(a.length==b.length){
       return a.toLowerCase().localeCompare(b.toLowerCase());
    }
});
console.log(input.join('\n'));

}
solve(['test', 
'Deny', 
'omen', 
'Default']
);