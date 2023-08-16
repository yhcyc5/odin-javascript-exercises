const removeFromArray = function(...myArray) {
    
    const basicArray = myArray.shift();
    const deleteWord = myArray;
    const outputArray = [];
    for (let bElement of basicArray){
        let is_del = false;
        deleteWord.forEach(dElement => {
            if (bElement === dElement) {
                is_del = true;
            }
        });
        if (is_del === false) {
            outputArray.push(bElement);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
