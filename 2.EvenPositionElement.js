function solve(input){
let newArr=[];
input.forEach((element,index) => {
    if(index%2==0){newArr.push(element)}
})
console.log(newArr.join(' '));

}
solve(['5']);