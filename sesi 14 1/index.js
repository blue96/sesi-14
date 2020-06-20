import {compareNumbers} from './compareNumb.js'

let hasil = document.getElementById('hasil')
let txt = ''
txt += `compareNumbers(5,8) = ${compareNumbers(5,8)}<br>`
txt +=`compareNumbers(5,3) = ${compareNumbers(5,3)}<br>` 
txt +=`compareNumbers(4,4) = ${compareNumbers(4,4)}<br>`
txt +=`compareNumbers(3,3) = ${compareNumbers(3,3)}<br>` 
txt +=`compareNumbers(17,2) = ${compareNumbers(17,2)}<br>` 
hasil.innerHTML = txt

console.log(compareNumbers(5,8))
console.log(compareNumbers(5,3))
console.log(compareNumbers(4,4))
console.log(compareNumbers(3,3))
console.log(compareNumbers(17,2))
