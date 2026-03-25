// function counterExample(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
//     };

// }
// const myCounter1=counterExample();
// const myCounter2=counterExample();
// const myCounter3=counterExample();
// Each call to the outer function creates a new closure.
// If you store that closure in multiple variables → each one has its own “private memory”.
// If you only call it once → only one private memory exists.
function createCounter() {
    let count = 0; // This variable is "captured"

    return function() {
        count++; // The inner function remembers 'count'
        console.log(count);
    };
}

const myCounter = createCounter();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3
createCounter();