let n = 7
let limite = (n+1)/2
let ast = "*"
let coluna = limite
let coluna2 = limite

for (let cont = 1; cont <= limite; cont++) {
    let arvore = "";
    
    for (let cont2 = 1; cont2 <= n; cont2++) {
        if(coluna == cont2 || coluna2 == cont2 || cont == limite){
            arvore += ast;
        }else{
            arvore += " ";
        }
    }
    coluna++
    coluna2--
    console.log(arvore)
}