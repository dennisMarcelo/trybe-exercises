function convertRomanNumber(romanNuber) {
    let brokenNumber = romanNuber.split("");
    let qttNumbers = brokenNumber.length;
    let arraNumbers = [];
    let result = null;

    for (let i = 0; i < qttNumbers; i += 1) {
        arraNumbers.push(tableRomanNumber(brokenNumber[i]))
    }

    for (let i = qttNumbers - 1; i >= 0; i -= 2) {
        if (arraNumbers[i - 1]) {
            if (arraNumbers[i - 1] >= arraNumbers[i]) {
                result += arraNumbers[i - 1] + arraNumbers[i]
            } else {
                result += arraNumbers[i] - arraNumbers[i - 1]
            }
        } else if (arraNumbers[i] >= arraNumbers[i + 1] || arraNumbers[i + 1] == undefined) {
            result += arraNumbers[i]
        } else {
            result -= arraNumbers[i]
        }
    }

    return result;

}

function tableRomanNumber(number) {
    let tableRomanNumbers = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    return tableRomanNumbers[number];
}

let romanos = ["I", "IV", "IX", "X", "XI", "XV", "XIX", "XX", "XXV", "XXX", "XLIX", "XCIX", "CDXCIX", "CMLII", "M"]
let romanos2 = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

romanos2.forEach((i) => {
    console.log(i + " = " + convertRomanNumber(i));
})

// só chamar esse função = convertRomanNumber()