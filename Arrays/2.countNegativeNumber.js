function countNegativeNumbers(arr){
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            count++
        }
    }
    return count;
}

console.log(countNegativeNumbers([1,-2,32,-3,21,-2121]));