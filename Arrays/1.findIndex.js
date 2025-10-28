function findIndex(arr,num){

    for(let i=0; i<arr.length; i++){
        if(arr[i]===num){
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1,2,3,4,5,6,7],7));