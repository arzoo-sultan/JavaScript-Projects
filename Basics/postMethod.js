async function postMethod() {
    try{
         const newUser={
        name:"Ali",
        email:"ali@gmail.com"
    }
    // without /1
        await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'Post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newUser)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log("Data received From Server");
        console.log(data.id);
        console.log("Name :",data.name);
         console.log("Email :",data.email);
         localStorage.setItem("name","Ali");
    })
    }
    catch(err){
        console.log("Error :" ,err)
    }
    
}
postMethod();