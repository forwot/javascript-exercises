const getTheTitles = function(arr) {
    let titlesArray = [];
    // instinctive did this first, then the mapping after
    // for( let i=0; i<arr.length; i++){
    //     titlesArray[i] = arr[i].title
    // } 
    titlesArray = arr.map( (item) => (item.title))
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
