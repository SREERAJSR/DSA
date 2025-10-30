function printStarPattern(limit){

    for(let i=0;i<limit; i++){
        let rows =''
        for(let j=0; j<=i; j++){
            rows+='* '
        }
        console.log(rows)
    }
}

printStarPattern(4)