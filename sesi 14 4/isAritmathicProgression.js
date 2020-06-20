function isAritmathicProgrression(arrNumb){
    let val = true
    let bBase = arrNumb[1]-arrNumb[0]

    for (let i = 1; i < arrNumb.length; i++){
        if (arrNumb[i]-arrNumb[i-1] != bBase){
            val = false
            break
        }
    }
    return val
}

export {
    isAritmathicProgrression,
}