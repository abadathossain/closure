function temporary(){
    let counter=0;
    return function(){
        counter++
        return counter;
    }
}
const add=temporary();
console.log(add())
console.log(add())
console.log(add())
console.log(add())


