async function getPost() {
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>response.json())
    .then(data=>{
        console.log("Title :",data.title);
        console.log("ID :",data.id);
    })
    .catch(err=>console.log(err))
    .finally(()=>console.log("Data fetched Successfully"));
}
getPost();