let n = 5;

sumNumbers(n)

function sumNumbers(number){
    let sum = null
    
    for(let i = 1; i <= number; i++){
        sum += i;    
    }

    console.log(sum)
}