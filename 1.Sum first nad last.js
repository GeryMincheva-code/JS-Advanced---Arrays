function solve(input){  
    let inputArr=input.map(el=>Number(el));
    let sumOfTheFirstAndLastElement;
    if(input.length>1){
        sumOfTheFirstAndLastElement= inputArr.pop()+inputArr.shift();
    } else {
        sumOfTheFirstAndLastElement=inputArr.shift()*2;
    }
    console.log(sumOfTheFirstAndLastElement);
    
}
solve(['5','10']);