const sumAll = function(a,b) {
    let sum = 0;
    
    if ( !Number.isInteger(a) || !Number.isInteger(b) 
            || a<0 || b<0
            ) {
        return "ERROR";
    }
    else if(a<b){
        for(let i=a; i<=b; i++){
            sum+= i;
        }
    }
    else{
        for(let i=b; i<=a; i++){
            sum+= i;
        }
    }
    return sum;
};

//Instead of a if-else, I could have done this
// if (min > max) {
//     const temp = min;
//     min = max;
//     max = temp;
//   }

// Do not edit below this line
module.exports = sumAll;
