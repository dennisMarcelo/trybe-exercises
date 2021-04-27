function getUppercaseString(str){
    return str.toUpperCase()
}

function getFirstCharecter(str){
    return str.slice(0, 1)
}

function concatString(str1, str2) {
    return `${str1} ${str2}`
}

module.exports = {
    getUppercaseString,
    getFirstCharecter,
    concatString,
}