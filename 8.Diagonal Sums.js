function solve(input){
let sumMainDiagonal = 0;
let sumSecondaryDiagonal=0;
let mainDiagonalIndex=0;
let secondaryDiagonalIndex=input[0].length-1;
input.forEach(arrElement=>{
    sumMainDiagonal+=arrElement[mainDiagonalIndex++];
    sumSecondaryDiagonal+=arrElement[secondaryDiagonalIndex--];
});
console.log(sumMainDiagonal +' '+sumSecondaryDiagonal);

}
solve([[3, 5, 17],
       [-1, 7, 14],
       [1, -8, 89]]);