function beliMie() {
    let modal = 50000, mie = 2500, count = 0, bonus = 0, total = 0

    while (modal >= 2500) {
        modal -= mie
        count++
        if (count%4 == 0) {
            bonus++
        }
    }

    total = count+bonus
    return total
}

console.log(beliMie())