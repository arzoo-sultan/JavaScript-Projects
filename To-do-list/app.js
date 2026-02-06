let taskInput=document.querySelector('#taskInput')
let addBtn=document.querySelector('#addBtn')
let taskList=document.querySelector('#taskList')
loadTasks();
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
  saveTasks();

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
  saveTasks();

});
function saveTasks(){
  const tasks=[];
  document.querySelectorAll("#taskList li").forEach(li=>{
    tasks.push({
      text:li.firstChild.textContent,
      completed:li.classList.contains("completed")
    });
   
  });
  localStorage.setItem("tasks",JSON.stringify(tasks));
}
 

function loadTasks(){
  const tasks=JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.border = "none";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.cursor = "pointer";

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });

}


