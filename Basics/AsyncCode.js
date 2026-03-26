console.log("A");
setTimeout(()=>{
    console.log("B")
},2000);
console.log("C"); //A,C,B
console.log("start");
setTimeout(()=>{
    console.log("End");
},0)
console.log("Middle");//start,Middle,End
// JS sees setTimeout
// It does NOT execute immediately
// It sends it to Web API
// Timer starts (0 ms)
// So JS moves forward.
//the one setTimeout with less time will 
// execute first but if the have same time they will execute in FIFO queue
//
 const id=setInterval(()=>{
    console.log("Hello");
},2000)
setTimeout(()=>clearInterval(id),5000)
// clearInterval(id);