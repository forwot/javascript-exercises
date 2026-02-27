const palindromes = function (str) {

    let cleaned = str
        .toLowerCase()
        .split('')
        .filter( (item) => 
            (item !== ' ' && item !== '!' && item !== '.' && item !== ',') )
        .join('');

    let reversed = cleaned.split('').reverse().join('');
    return ( cleaned === reversed );
};

// Do not edit below this line
module.exports = palindromes;
