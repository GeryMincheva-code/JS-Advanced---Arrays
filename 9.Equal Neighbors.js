function solve(input){
    let pairs=0;
    for (let row = 0; row < input.length-1; row++) {
        for (let col = 0; col <= input[row].length-1; col++) {
            if(input[row][col]==input[row][col+1]){
                pairs++;
            }
            if(input[row][col]==input[row+1][col]){
                pairs++;
            }
            if (row == input.length - 2 && input[row + 1][col] == input[row + 1][col + 1]) {
                pairs++;
            }
        }
        
            
        
    }
    console.log(pairs);
       

}
solve([[2, 2, 5, 7, 4],
       [4, 0, 5, 3, 4],
       [2, 5, 5, 4, 2]]

);