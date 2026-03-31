const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const filters = document.querySelectorAll(".filters button");
const itemsLeft = document.getElementById("itemsLeft");
const clearCompletedBtn = document.getElementById("clearCompleted");

let currentFilter = "all";

// ===== ADD TASK =====
function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="delete-btn">X</button>
    `;

    list.appendChild(li);
    input.value = "";

    updateCount();
}

// Enter key
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") addTask();
});

// Button click
addBtn.addEventListener("click", addTask);

// ===== EVENT DELEGATION =====
list.addEventListener("click", function(e) {

    // Delete
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        updateCount();
        return;
    }

    // Toggle complete
    const li = e.target.closest("li");
    if (li) {
        li.classList.toggle("completed");
        updateCount();
    }
});

// ===== FILTER TASKS =====
filters.forEach(btn => {
    btn.addEventListener("click", function() {
        currentFilter = btn.dataset.filter;

        // Highlight active button
        filters.forEach(b => b.classList.remove("active-filter"));
        btn.classList.add("active-filter");

        filterTasks();
    });
});

function filterTasks() {
    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        switch (currentFilter) {
            case "active":
                task.style.display = task.classList.contains("completed") ? "none" : "flex";
                break;
            case "completed":
                task.style.display = task.classList.contains("completed") ? "flex" : "none";
                break;
            default:
                task.style.display = "flex";
        }
    });
}

// ===== STATS =====
function updateCount() {
    const tasks = document.querySelectorAll("#taskList li");
    const active = [...tasks].filter(t => !t.classList.contains("completed")).length;

    itemsLeft.textContent = `${active} item${active !== 1 ? "s" : ""} left`;

    filterTasks(); // keep filter applied
}

// ===== CLEAR COMPLETED =====
clearCompletedBtn.addEventListener("click", function() {
    const completed = document.querySelectorAll("#taskList li.completed");
    completed.forEach(task => task.remove());
    updateCount();
});

// ===== EDIT TASK (BONUS) =====
list.addEventListener("dblclick", function(e) {
    const span = e.target.closest(".task-text");
    if (!span) return;

    const li = span.parentElement;
    const oldText = span.textContent;

    const inputEdit = document.createElement("input");
    inputEdit.value = oldText;

    li.replaceChild(inputEdit, span);
    inputEdit.focus();

    // Save on Enter
    inputEdit.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            saveEdit();
        }
        if (e.key === "Escape") {
            cancelEdit();
        }
    });

    function saveEdit() {
        const newSpan = document.createElement("span");
        newSpan.className = "task-text";
        newSpan.textContent = inputEdit.value.trim() || oldText;
        li.replaceChild(newSpan, inputEdit);
    }

    function cancelEdit() {
        const newSpan = document.createElement("span");
        newSpan.className = "task-text";
        newSpan.textContent = oldText;
        li.replaceChild(newSpan, inputEdit);
    }
});