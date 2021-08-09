const checkRes = (first) => {
    return (second) => {
        return first === second;
    }
}  

const checkRes2 = checkRes('bana camamelizada')


console.log(checkRes2('bana camamelizada'))

//const greaterThan = (second) => (first) => second === first;