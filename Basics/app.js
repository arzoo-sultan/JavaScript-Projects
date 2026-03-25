let box = document.querySelector('#container');
let taskInput = document.querySelector('#inputTask'); // Renamed for clarity
let addBtn = document.querySelector('#addbtn');

let tasks = [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let stored = localStorage.getItem("tasks");
    // Corrected: assign to 'tasks' array, not the 'task' input element
    tasks = stored ? JSON.parse(stored) : [];
}

function renderTasks() {
    box.innerHTML = "";

    tasks.forEach((taskObj, index) => {
        let p = document.createElement("p");
        p.textContent = taskObj.text;

        if (taskObj.completed) {
            p.classList.add("completed");
        }

        p.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });

        let delbtn = document.createElement("button");
        delbtn.textContent = "Delete";
        delbtn.style.marginLeft = "10px"; // Just for spacing

        delbtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        p.appendChild(delbtn);
        box.appendChild(p);
    });
}

addBtn.addEventListener("click", () => {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Enter a Task");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    taskInput.value = "";
    saveTasks();
    renderTasks();
});

taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// 🚀 CRITICAL: Run these when the page loads!
loadTasks();
renderTasks();