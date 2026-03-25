// Higher-order functions enable abstraction
function calculator(a,b,operation){
    return operation(a,b);
}
function add(x,y){
    return x+y;
}
console.log(calculator(3,5,add));