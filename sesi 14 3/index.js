import {sortByCharacter} from './sortByChar.js'

let hasil = document.getElementById('hasil')
let txt = ''
txt += `sortByCharacter('hello') = ${sortByCharacter('hello')}<br>`
txt += `sortByCharacter('truncate') = ${sortByCharacter('truncate')}<br>`
txt += `sortByCharacter('developer') = ${sortByCharacter('developer')}<br>`
txt += `sortByCharacter('software') = ${sortByCharacter('software')}<br>`
txt += `sortByCharacter('aegis') = ${sortByCharacter('aegis')}<br>`
hasil.innerHTML = txt

