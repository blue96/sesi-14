import {reverseText} from './reverseText.js'

let hasil = document.getElementById('hasil')
let txt = ''
txt += `reverseString('Hello world and Coders') = ${reverseText('Hello world and Coders')}<br>`
txt += `reverseString('John Doe') = ${reverseText('John Doe')}<br>`
txt += `reverseString('I am bookworm') = ${reverseText('I am bookworm')}<br>`
txt += `reverseString('Coding is my hobby') = ${reverseText('Coding is my hobby')}<br>`
txt += `reverseString('super') = ${reverseText('super')}<br>`
hasil.innerHTML = txt

console.log(reverseText('super'))
