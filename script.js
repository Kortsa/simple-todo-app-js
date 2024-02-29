const todoLists = document.getElementById("todoList")
let Lists = []

function addToDo() {
    const todo = document.getElementById("newToDoInput")
    const todoInput = todo.value

    if (todoInput !== "") {
        Lists.push(todoInput);
    }

    display()
    todo.value = ""
}

function display() {
    const result = document.getElementById("todoList")

    let display = ""

    Lists.forEach(list => {
        display += `<li> ${list} <button class="delete-todo-btn">&times;</button></li>`;
    });
    
    result.innerHTML = display;
}

function deleteToDo(index) {
    Lists.splice(index, 1);
    display()
}


todoLists.addEventListener("click", function(e){
    if (e.target.classList.contains("delete-todo-btn")) {
        const index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode
        )
            deleteToDo(index)
    }
})
