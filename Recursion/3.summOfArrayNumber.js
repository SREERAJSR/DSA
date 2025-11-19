function findSumOfNumbersInArray(n){
    if(n<0){
        return 0
    }

    return arr[n] + findSumOfNumbersInArray(n-1)
}
let arr=[1,2,3,4,5]
console.log(findSumOfNumbersInArray(arr.length-1))