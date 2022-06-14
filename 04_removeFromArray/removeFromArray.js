const removeFromArray = function(myArray, ...remove) {
    remove.sort();
    for (i = 0; i < (arguments.length); i++) {
        for (j = 0; j < remove.length; j++) {
            myArray = myArray.filter(i => i !== remove[j]);
        }
    }
    return myArray;
};
// Do not edit below this line
module.exports = removeFromArray;
