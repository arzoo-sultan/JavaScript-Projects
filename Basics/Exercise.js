const prices = [100, 200, 50];
const newPrices=prices.map(p=>p+p*0.1);
console.log(newPrices);
const aboveHundred=prices.filter(s=>s>100);
console.log(aboveHundred);
const total=prices.reduce((acc,index)=>{
    return acc+index;
},0);
console.log(total);