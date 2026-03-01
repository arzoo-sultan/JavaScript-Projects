let userName=document.getElementById('username');
let password=document.getElementById('password');
let submit=document.getElementById('submit');
submit.addEventListener('click',function(e){
    e.preventDefault();
    if(userName.value=="admin" && password.value=="admin"){
        alert("Login successful"); 
     }
    else{
        alert("Login failed");
    }
})
