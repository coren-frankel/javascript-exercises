const sumAll = function(bot, top) {
    if (bot < 0 || top < 0) {
        return 'ERROR';
    } else if ((typeof top !== 'number') || (typeof bot !== 'number')) {
        return 'ERROR';
    } else {
        let sum = bot + top;
        if (bot < top) {
            let i = (bot + 1);
            while (i < top) {
                sum += i;
                i++;
            }
            return sum;
        } else if (top < bot) {
            let i = (top + 1);
            while (i < bot) {
                sum += i;
                i++;
            }
            return sum;
        }
    }
};

//Set a loop from the bottom number to the top number that incrememts 1 each iteration
//establish sum as the total of bottom and top
//adds t
// Do not edit below this line
module.exports = sumAll;
