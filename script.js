let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

let addTask = () => {
    let taskText = taskInput.value.trim();
    if (!taskText) return;

    let listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <button class="delete-btn">X</button>`;

    listItem.addEventListener("click", () => listItem.classList.toggle("completed"));
    listItem.querySelector(".delete-btn").addEventListener("click", () => listItem.remove());

    taskList.appendChild(listItem);
    taskInput.value = "";
};

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => e.key === "Enter" && addTask());
