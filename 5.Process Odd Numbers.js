function solve(input){
    let newArr=[]
    input.map((el,i)=>{
        if(i%2!=0){
            newArr.push(el);
        }
    });
    console.log(newArr.reverse().map(el=>el*2));
    
    
}
solve([3, 0, 10, 4, 7, 3]);

//[10, 15, 20, 25]