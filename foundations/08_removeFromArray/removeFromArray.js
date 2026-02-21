const removeFromArray = function(arr, ...numbers) {
    for(let i=0; i<arr.length; i++){
        for (num of numbers){
            if(arr[i] == num && typeof arr[i] === typeof num){
                arr.splice(i,1);
                i--;
            }
        }
    }
    return arr;
};  
// not wrong but there are more efficient methods, using
// .forEach, .includes and .push

console.log(removeFromArray([1,2,3,4],3,2))

// Do not edit below this line
module.exports = removeFromArray;
