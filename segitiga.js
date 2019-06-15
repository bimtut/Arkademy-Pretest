function sikuSiku(alas) {
    let prime = '', primeStart = 2
    
    if (alas < 1 || alas > 9) {
        return "nilai yang dimasukkan tidak dapat dihitung"
    } else {
        for (let i = 0; i < alas; i++) {
                let input = true
                if (primeStart >= 2) {
                    let primeNumber = true
                    for (let k = 2; k < primeStart; k++) { //pembagi
                        if (primeStart % k == 0) {
                            primeNumber = false
                        }
                    }
                    if (primeNumber ==  false) {
                        i--
                        primeStart++
                        input = false
                    }
                }

            if (input == true){
                prime += ' '+primeStart
                console.log(prime)
                primeStart++
            }
        }
    } 
}

sikuSiku(9)