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