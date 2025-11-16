function print1toN(value,n) {
    if(value>n) return;

    console.log(value);
    print1toN(++value,n)
}

print1toN(1,10)