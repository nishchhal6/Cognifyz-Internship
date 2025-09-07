// 1. Zaroori HTML elements ko select karo
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// 2. Local Storage se tasks load karo (ya khaali array se shuru karo)
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 3. Jab form submit ho (task add ho)
todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Page ko refresh hone se roko

  const taskText = todoInput.value.trim();
  if (taskText !== "") {
    // Naya task object banao
    const task = {
      id: Date.now(), // Unique ID
      text: taskText,
      completed: false,
    };
    // Array mein task add karo
    todos.push(task);
    // Input ko khali karo
    todoInput.value = "";
    // UI aur Local Storage ko update karo
    updateUI();
    saveToLocalStorage();
  }
});

// 4. Tasks ko UI mein dikhane wala function
function updateUI() {
  todoList.innerHTML = ""; // List ko khali karo

  todos.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <button class="delete-btn">×</button>
        `;
    todoList.appendChild(li);
  });
}

// 5. Tasks ko Local Storage mein save karne wala function
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 6. List par click event handle karna (complete ya delete ke liye)
todoList.addEventListener("click", (e) => {
  const target = e.target;
  const parentLi = target.closest("li");
  if (!parentLi) return;

  const taskId = Number(parentLi.dataset.id);

  if (target.classList.contains("delete-btn")) {
    // Task delete karo
    todos = todos.filter((task) => task.id !== taskId);
  } else {
    // Task ko complete/incomplete toggle karo
    const task = todos.find((task) => task.id === taskId);
    task.completed = !task.completed;
  }

  // UI aur Local Storage ko update karo
  updateUI();
  saveToLocalStorage();
});

// Shuruaat mein UI ko render karo
updateUI();
