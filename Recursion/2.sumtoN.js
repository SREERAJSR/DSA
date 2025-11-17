function sumToN(n){

    if(n ===0){  
        return 0;
    }
    return n + sumToN(n-1)
}

console.log(sumToN(5))

//1.sumTonN(5) --> n===0 X --> return 5+ sumToN(4)--> n===0 X --> return 4+ sumToN(3)+ n===0 X --> return 3+ sumToN(2) --> n===0 X --> return 2+ sumToN(1)--> n===0 X --> return 1+ sumToN(0) --> n===0 true --> return 0;