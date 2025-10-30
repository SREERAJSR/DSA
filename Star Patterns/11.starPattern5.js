function printStarPattern(n){

    for(let i=5; i>=0; i--){
        let row =''
        for(let j=0; j<i; j++){
            row +=(j+1)+' '
        }
        console.log(row);
    }
}
printStarPattern(5)