
document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    myToDo(document.getElementById('new-task-description').value);
    form.reset()
  });
});

function myToDo(todo) {
  let li = document.createElement("li");
  li.textContent = `${todo} `;
  let delBtn = document.createElement("button");
  delBtn.addEventListener('click', handleDelete)
  delBtn.textContent = "x";
  li.appendChild(delBtn);
  document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e){
  e.target.parentNode.remove()
}


