function validPalindrome(n){

if(n <0) false
    let b=n;
    let rev =0;

    while(b>0){
        let rem = b %10;
        rev = (rev*10 )+rem;
        b = Math.floor(b /10)
    }
return 
}

console.log(validPalindrome(121));