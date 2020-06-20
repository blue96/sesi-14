import {isAritmathicProgrression} from './isAritmathicProgression.js'

let hasil = document.getElementById('hasil')
let txt = ''
txt += `isAritmathicProgrression([1,2,3,4,5]) = ${isAritmathicProgrression([1,2,3,4,5])}<br>`
txt += `isAritmathicProgrression([2,4,6,12,24]) = ${isAritmathicProgrression([2,4,6,12,24])}<br>`
txt += `isAritmathicProgrression([2,4,6,8]) = ${isAritmathicProgrression([2,4,6,8])}<br>`
txt += `isAritmathicProgrression([2,6,18,54]) = ${isAritmathicProgrression([2,6,18,54])}<br>`
txt += `isAritmathicProgrression([1,2,3,4]) = ${isAritmathicProgrression([1,2,3,4])}<br>`
txt += `isAritmathicProgrression([1,2,3,5,6,7,8,1,2]) = ${isAritmathicProgrression([1,2,3,5,6,7,8,1,2])}`
hasil.innerHTML = txt

