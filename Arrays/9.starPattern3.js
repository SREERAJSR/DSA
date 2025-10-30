// function printStarPattern(n){
//     for(let i=0; i<n; i++){
//         let a =0;
//         let rows =''
//         for(let j=0; j<=i; j++){
//             rows +=(++a)+' '
//         }
//         console.log(rows)
//     }
// }

function printStarPattern(n){
    for(let i=0; i<n; i++){
        let rows =''
        for(let j=0; j<=i; j++){
            rows +=(j+1)+' '
        }
        console.log(rows)
    }
}
printStarPattern(5)