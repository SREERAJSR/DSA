function getSecondLargestNumber(arr){
    if(arr.length <2){
        return null;
    }
    let largestNum = -Infinity
    let secondLargest;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>largestNum){
            secondLargest =largestNum;
            largestNum = arr[i];
        }else if(arr[i] > secondLargest && arr[i]!== largestNum ){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(getSecondLargestNumber([-100,-2000,1,5,3,300,1000]));