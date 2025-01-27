function addTask() {
  const input = document.getElementById("tf-input").value;
  const task = document.createElement("li");

  if (!input) return;

  task.textContent = input;
  task.id =
    new Date().valueOf().toString() +
    Math.random().toString(36).substring(2, 7);
  task.classList.add("list-item");

  addButton(task, task.id);

  document.getElementById("task-container").appendChild(task);
  document.getElementById("tf-input").value = "";
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}

function buttonEdit(id) {
  const input = document.getElementById("tf-input");
  const buttonUpdate = document.getElementById("input-button");

  input.placeholder = "Edit task " + id;
  buttonUpdate.textContent = "Update";

  buttonUpdate.onclick = () => {
    editTask(id);
  };
}

function editTask(id) {
  const task = document.getElementById(id);
  const input = document.getElementById("tf-input");

  task.textContent = input.value;

  addButton(task, id);
  document.getElementById("tf-input").value = "";
  document.getElementById("tf-input").placeholder = "Enter a task";
}

function addButton(element, id) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", () => {
    deleteTask(id);
  });
  element.appendChild(deleteButton);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");
  editButton.addEventListener("click", () => {
    buttonEdit(id);
  });
  element.appendChild(editButton);
}
