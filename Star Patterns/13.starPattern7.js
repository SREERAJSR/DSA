function printStarPattern(n){

    let a =n;
    for(let i=0; i<n; i++){
        let row =''
        a--;
        for(let j=0; j<n; j++){
            if(j<a) row +=' '
            else row+='*'
        }
        console.log(row);
    }
}

function printStarPattern1(n){
    for(let i=0; i<n; i++){
        let row =''
        for(let j=0; j<n; j++){
            if(j<(n-(i+1))){
                row +=' '
            }else row +='*'
        }
        console.log(row);
    }
}
printStarPattern(7)
printStarPattern1(7)