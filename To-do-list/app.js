let taskInput=document.querySelector('#taskInput')
let addBtn=document.querySelector('#addBtn')
let taskList=document.querySelector('#taskList')
function addTask(){
    let taskText=taskInput.value.trim();
    if(taskText===""){
        alert("Please Enter Task");
        return;
    }
    let li=document.createElement("li")
    li.textContent=taskText;

    let deleteBtn=document.createElement("button");
    deleteBtn.textContent = "❌";
  deleteBtn.style.border = "none";
  deleteBtn.style.background = "transparent";
  deleteBtn.style.cursor = "pointer";
  taskList.appendChild(li);
  li.appendChild(deleteBtn);
  taskInput.value="";
}
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});
taskList.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }

  if (e.target.textContent === "❌") {
    e.target.parentElement.remove();
  }
});


