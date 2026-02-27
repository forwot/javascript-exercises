const findTheOldest = function(arr) {   
    const YEAR = 2026

    let value = arr.reduce( (max,item) => {
        
        let maxAge = (item.yearOfDeath) ? (item.yearOfDeath - item.yearOfBirth) : (YEAR - item.yearOfBirth);   
        
        if(maxAge > max){
            max = maxAge;
            return max;
        }
        return max;
    }, 0)

    let profile = arr.find( (item) => {

        let maxAge = (item.yearOfDeath) ? (item.yearOfDeath - item.yearOfBirth) : (YEAR - item.yearOfBirth);   
        
        if(maxAge === value){
            console.log(item.name)
            return item;
        }
    })
    return profile;
};

// Do not edit below this line
module.exports = findTheOldest;
