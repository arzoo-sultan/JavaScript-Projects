const person={
    name:"Arzu",
    age:21,
    city:"Lahore"
}
 const ObjecttoJson=JSON.stringify(person);
 console.log(ObjecttoJson);
 const JsontoObject= JSON.parse(ObjecttoJson);
 console.log(JsontoObject);