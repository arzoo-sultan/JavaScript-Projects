const myPromise=new Promise((resolve,reject)=>{
    console.log("This is a Promise");
    let success=true;
    if(success){
        resolve("you are pass"); //whole value will be pass to resolve
    }
    else{
        reject("you are fail");//whole value will be pass to reject
    }
})
.then((result)=>{
    console.log("message :" ,result);
})
.catch(err=>console.log("Error :",err))//here no semicolon
.finally(()=>console.log("Result Showed"));//receives no value, always runs at the end

// Promise executor function:
// (resolve, reject) => {
//   if task succeeds → resolve(value)
//   if task fails → reject(error)
// }

// .then(result => ...)  <-- runs only if resolved
// .catch(error => ...)  <-- runs only if rejected
// .finally(() => ...)   <-- runs always