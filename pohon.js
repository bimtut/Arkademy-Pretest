function pohon(length, years) {
    if (height > 0 && years > 0) {
        let height = length
        for (let i = 0; i < years; i++) {
            height += (height*2)
            height++
        }
    } else {
        return `isikn tahun yang lebih besar`
    }

    return `tinggi pohon setelah ${years} tahun adalah ${height} meter`
}

console.log(pohon(1, 2))