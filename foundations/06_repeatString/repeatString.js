const repeatString = function(str, times) {
    if (times < 0) return "ERROR";
    
    let repeat = "";
    for(let i=0; i<times; i++){
        repeat+= str;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
