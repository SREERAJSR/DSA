function findSmallestNumber(arr){
    let smallest = Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<smallest){
            smallest =arr[i]
        }
    }
    return smallest
}

console.log(findSmallestNumber([2,3121,1,-2]));