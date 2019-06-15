function palindrome (text, search) {
    let count = 0
    for (let i = 0; i <= text.length - search.length; i++) {
        let compare = text.slice(i, i+search.length)
        if (compare == search) {
            count++
        }
    }

    for (let j = text.length - search.length; j >= 0; j--) {
        let compare = text.slice(j, j+search.length)
        if (compare == search) {
            count++
        }
    }
    return `ditemukan ${count} kali`
}

console.log(palindrome("banananana", "nana"))