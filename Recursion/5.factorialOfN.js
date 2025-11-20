function findFactorialOfN(n){
    if(n===1){
        return 1;
    }
    return n*findFactorialOfN(n-1)
}

console.log(findFactorialOfN(5))