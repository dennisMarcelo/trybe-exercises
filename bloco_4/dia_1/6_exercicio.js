//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "Rainha"

switch (peca.toLowerCase()) {
    case "rei":
        console.log("movimento uma casa em qualquer direção");
        break;

    case "rainha":
        console.log("Movimenta em qualquer direção.");
        break;

    case "bispo":
        console.log("Movimenta na diagonal.");
        break;

    case "torre":
        console.log("Movimenta em reta.");
        break;

    case "cavalo":
        console.log("Movimenta em L.");
        break;

    case "pião":
        console.log("Movimenta uma casa para frente.");
        break;    

    default:
        console.log("Isso não é uma peça de xadrez");
        break;
}