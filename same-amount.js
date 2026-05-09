function sameAmount(str, reg1, reg2) {
    const addGlobal = (reg) => {
        if (reg.flags.includes('g')) return reg
        return new RegExp(reg.source, reg.flags + 'g')
    }

    const matches1 = str.match(addGlobal(reg1)) || []
    const matches2 = str.match(addGlobal(reg2)) || []
    return matches1.length === matches2.length
}