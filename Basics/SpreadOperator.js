const person={
    name:"Arzoo",
    age:22,
    city:"Lahore",
}
const clone={...person};//{ name: 'Arzoo', age: 22, city: 'Lahore' }
console.log(clone);
const updated={
    ...person,
    age:31,
    salary:5666
}

console.log(updated);//{ name: 'Arzoo', age: 31, city: 'Lahore', salary: 5666 }
console.log(person);//original will remain unchanged 