function checkPalidrome(str){
    let invertedStr = str.split("").reverse().join("")

    if(str == invertedStr){
        console.log("true")
    }else{
        console.log("false")
    }
}

checkPalidrome("arara")