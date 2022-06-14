
document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    taskToDo(document.getElementById('new-task-description').value);
    form.reset()
  });
});

function taskToDo(todo) {
  let li = document.createElement("li");
  li.textContent = `${todo} `;
  let liBtn = document.createElement("button");
  liBtn.addEventListener('click', handleDelete)
  liBtn.textContent = "x";
  li.appendChild(liBtn);
  document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e){
  e.target.parentNode.remove()
}


