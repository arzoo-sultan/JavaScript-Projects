let numbers=[1,2,3,4,5];
numbers.forEach((item)=>console.log(item*2));
const evenNum=numbers.filter(num=>num%2===0);
console.log(evenNum);
const sum=numbers.reduce((acc,num)=>acc+num,0);
console.log(sum);
