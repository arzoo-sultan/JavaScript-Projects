// Callback = “I’ll give you the data, you tell me what to do with it”
function greet(name){
    console.log("Hello"+" "+name);
}
function processUser(callback){
    callback("Arzu")
}
processUser(greet);
//call back example Callbacks enable asynchronous programming
setTimeout(()=>{
        console.log("Done");
},2000);