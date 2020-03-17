function solve(input){
let initialNumber=1;
let result=[];
input.forEach(el=>{
    if(el==='add'){
        result.push(initialNumber);        
    }
    if(el==='remove'){
        result.pop();
    }
    initialNumber++;
    
});
if(result.length>0){
console.log(result.join('\n'));
} else {
    console.log("Empty");
    
}

}
solve(['remove', 
'remove', 
'remove']

)