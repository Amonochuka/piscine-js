function sameAmount(str, reg1, reg2) {
    let count1 = 0
    let count2 = 0
    
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i).match(reg1)) count1++
        if (str.slice(i).match(reg2)) count2++
    }
    
    return count1 === count2
}