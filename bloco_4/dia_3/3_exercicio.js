let n = 5
let ast = "*"


for (let cont = 1; cont <= n; cont++) {
    let esp = ""
    for(let cont2 = 0; cont2 < (n-cont); cont2++ ){
        esp+=" "
    }
    console.log(esp+ast)
    ast+= "*"
}