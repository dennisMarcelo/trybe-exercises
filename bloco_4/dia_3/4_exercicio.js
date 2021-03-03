let n = 11
let limite = null
let ast = "*"

for (let cont = 1; cont <= n; cont += 2) {
    limite++
}

for (let cont = 1; cont <= n; cont++) {
    let esp = ""
    
    for (let cont2 = 0; cont2 < limite; cont2++) {
        esp += " "
    }
    if ((cont % 2 != 0)) {
        console.log(esp + ast)
        limite--
    }
    ast += "*"
}