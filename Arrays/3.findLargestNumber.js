function findLargestNumberInArray(arr){
    let largest = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargestNumberInArray([21,1,22,2]))