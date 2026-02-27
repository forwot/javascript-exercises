const fibonacci = function(pos) {
    let fib = [0,1,1];
    if( pos<0 ){
        return "OOPS";
    }
    for( let i=2; i<=pos; i++){
        let next = fib[i-1] + fib[i-2];
        fib[i] = next;
    }
    return fib[pos];
};

//this solution is not wrong, but uses alot of memory when pos gets large
//Heres a better soln:
    // let firstPrev = 1;
    // let secondPrev = 0;
    // for (let i = 2; i <= count; i++) {
    //     let current = firstPrev + secondPrev;
    //     secondPrev = firstPrev;
    //     firstPrev = current;
    // }

// Do not edit below this line
module.exports = fibonacci;
