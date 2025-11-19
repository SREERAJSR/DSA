function sum(n){
    if(n===0){
        return arr[0]%2===1 ?arr[0]:0
    }
    return (arr[n]%2===1 ?arr[n]:0) +sum(n-1)
}
let arr =[5,2,0,3,6]
console.log(sum(arr.length-1))