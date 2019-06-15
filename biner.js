function biner(numb) {
    let result = ''
    let swapResult = ''
    while(numb > 0) {
        let sisa = numb%2
        result += sisa
        numb = Math.floor(numb/2)
    }

    for (let i = result.length-1; i >= 0; i--) {
        swapResult += result[i]
    }

    let finalResult = ''
    let zero = 8 - swapResult.length
    for (let i = 0; i < zero; i++) {
        finalResult += 0
    }

    finalResult += swapResult
    return finalResult
}

console.log(biner(30))