function findSecondSmallestNumber(arr){

    if(arr.length <2){
        return -1;
    }
    let smallest =Infinity;
    let secondSmallest = Infinity;

    for(let i=0;i<arr.length; i++){
        if(arr[i]<smallest){
            secondSmallest = smallest;
            smallest= arr[i]
        }else if(arr[i]< secondSmallest && arr[i]!==smallest){
            secondSmallest=arr[i]
        }
    }
    return secondSmallest;  
}

console.log(findSecondSmallestNumber([1,2,-1,300,3]));