//implementation of this
// const user={
//     name:"John",
//     price:999,
//     sayHi :function(){
//         console.log(`${this.name},Welcome to website`);
//          console.log(this);
//     }
    
// }
// console.log(user.sayHi()); // John
//  user.name="Arzoo";
//  console.log(user.sayHi());
 function chai(){
   let username="Arzu" 
    console.log(this.username);//undefined because this is not refering
    // to the object but to the global object window and there is 
    // no username property in the global object
 }
chai();