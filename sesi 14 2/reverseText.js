function reverseText(text){
    var splitString = text.split("");
    var newText = splitString.reverse();
    var joinArr = newText.join("");
    return joinArr;
}

export {
    reverseText,
}