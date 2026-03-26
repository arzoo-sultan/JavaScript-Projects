const person={
    name:"Arzoo",
    age:22,
    city:"Lahore",
    //Mehtod old way
    greet:function(){
        console.log("Hello my Name is "+this.name);
    },
    //Modern Method
    celebrateBirthday(){
        this.age++;
            console.log(`Happy Birthday to me today i'm ${this.age} years old`);

    }
}
person.greet();
person.celebrateBirthday();
//Destructring
//old method
// const age=person.age;
// const name=person.name;
// console.log(age,name);
//Modern Method
const {name,age,city}=person;
console.log(name,age,city);
//Rename while destrcuting
const{name:fullName,age:Age,city:homeTown}=person;
console.log(fullName,Age,homeTown);
//Default values will not be included in orginal object
const {salary=5000}=person;
console.log(salary);//5000
console.log(person.salary);//undefined
console.log(person);
