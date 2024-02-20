let todoInput = document.querySelector(".input");
todoInput.value = "";
let addBtn = document.querySelector(".btn");
let todosContainer = document.querySelector(".todosContainer");

addBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    todoInput.value = todoInput.value.trim();
    if(todoInput.value.length > 0) {
        addToTodos();
        todoInput.value = "";
    }
});

function addToTodos() {
    let todoList = document.createElement("div");
    todoList.id = "delId";
    let todoListInp = document.createElement("input");
    todoListInp.setAttribute("type", "checkbox"); 
    todoListInp.classList.add("inpCheck");
    let todoListLabel = document.createElement("label");
    todoListLabel.innerText = todoInput.value; 
    todoListLabel.classList.add("labels");
    let todoListBtn = document.createElement("button"); 
    todoListBtn.innerText = "Del";
    todoListBtn.classList.add("delBtn");

    todoListBtn.addEventListener("click", handleDelBtn);

    todoList.appendChild(todoListInp);
    todoList.appendChild(todoListLabel);
    todoList.appendChild(todoListBtn);
    todosContainer.appendChild(todoList);
}
function handleDelBtn () {
    let delTodo = document.getElementById("delId");
    delTodo.remove();
}
