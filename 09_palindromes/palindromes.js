const palindromes = function (pal) {
    let reverse = [];
    let arrPal = Array.from(pal.toLowerCase());
    for(let i = (arrPal.length - 1); i >= 0; i--){
        if (arrPal[i] == (" " || "." || "," || "!" || "?")){
            arrPal.splice(i,1);
            i++;
            console.log(i)
        } else {
            reverse.push(arrPal[i]);
            console.log(reverse)
        }
    }
    let m = 0;
    while (m < arrPal.length){
        if (m === ((arrPal.length - 1)) && (arrPal[m] === reverse[m])){
            return true;
        } else if (arrPal[m] === reverse[m]){
            continue;
        } else if (arrPal[m] !== reverse[m])
            return false;
        m++;
    } 
};  

// Do not edit below this line
//module.exports = palindromes;
