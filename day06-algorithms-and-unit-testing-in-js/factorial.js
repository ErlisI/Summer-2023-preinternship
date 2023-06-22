function factorial(n) {
    if(n === 0 || n === 1) //[0,1].includes(n) ~ also works
        return 1;

    return n * factorial(n - 1);
}

module.exports = factorial;