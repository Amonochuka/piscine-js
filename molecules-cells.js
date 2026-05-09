function RNA(dna) {
    const map = { G: 'C', C: 'G', T: 'A', A: 'U' }
    let result = ''
    for (let i = 0; i < dna.length; i++) {
        result += map[dna[i]]
    }
    return result
}

function DNA(rna) {
    const map = { C: 'G', G: 'C', A: 'T', U: 'A' }
    let result = ''
    for (let i = 0; i < rna.length; i++) {
        result += map[rna[i]]
    }
    return result
}

// tests
console.log(RNA("GCTA"))  // "CGAU"
console.log(DNA("CGAU"))  // "GCTA"