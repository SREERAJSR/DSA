function printStarPattern(n){

    for(let i=n; i>0; i--){
        let row =''
        for(let j=0; j<i; j++){
            row +='* '
        }
        console.log(row);
    }
}

printStarPattern(5)