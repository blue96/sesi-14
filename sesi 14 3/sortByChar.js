function sortByCharacter(text){
    var splitString = text.split("");
    var newText = splitString.sort();
    var joinArr = newText.join("");
    return joinArr;
}

export {
    sortByCharacter,
}