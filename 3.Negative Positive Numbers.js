function solve(input){
let newArr=[];
input.forEach(element => {
    if(element<0){
        newArr.unshift(element);
    } else {
        newArr.push(element)
    }
});
console.log(newArr.join('\n'));

}
solve([7, -2, 8, 9]);