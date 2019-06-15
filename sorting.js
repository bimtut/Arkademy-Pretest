function manualSort(arr) {
    let asc = arr
    asc =  asc.sort(function(a,b) {return a-b})
    // let dsc = arr
    // dsc = dsc.sort(function(a,b) {return b-a})
    let dsc = []
    for (let i = asc.length-1; i >= 0; i--) {
        dsc.push(asc[i])
    }
    let min = asc[0], max = asc[asc.length-1]
    console.log(`Data terkecil = ${min}\nData terbesar = ${max}\nAscending Sort = ${asc}\nDescending Sort = ${dsc}`)
}

let bilangan = [6,22,34,15,2,13,26,57,42,32]
manualSort(bilangan)