const palindromes = function (pal) {
    let reverse = [];
    let arrPal = Array.from(pal.toLowerCase());
    for(let i = arrPal.length; i >= 0; i--){
        if (arrPal[i] == (" " || "." || "," || "!" || "?")){
            arrPal.splice(i,1);
            i++;
        } else {
            reverse.push(arrPal[i]);
        }
    }
    let m = 0;
    while (m < arrPal.length){
        if (m === arrPal.length){
            return true;
        } else if (arrPal[m] === reverse[m]){
            continue;
        } else if (arrPal[m] !== reverse[m])
            return reverse;
            return false;
        m++;
    } 

    
};  

// Do not edit below this line
module.exports = palindromes;
