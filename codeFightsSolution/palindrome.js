function checkPalindrome(inputString) {
    let inverse = '';
    for (let i = inputString.length - 1; i >= 0; i-- ) {
        inverse += inputString[i]
    }
    return inverse === inputString
}


checkPalindrome('aabaa');