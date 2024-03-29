const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

let toDos = [];

const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


function deleteToDo(event) {

    const li = event.target.parentElement
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    li.remove();
    saveToDos();

}

function paintToDo(newToDo) {
    const li = document.createElement("li")
    li.id = newToDo.id
    const span = document.createElement("span")

    span.innerText = newToDo.text

    const button = document.createElement("button")
    button.innerText = "✓"
    button.addEventListener("click", deleteToDo)


    li.appendChild(span)
    li.appendChild(button)

    toDoList.appendChild(li)
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const todoObject = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(todoObject);
    paintToDo(todoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const localsaveToDos = localStorage.getItem(TODOS_KEY)


if (localsaveToDos !== null) {
    const parsedToDos = JSON.parse(localsaveToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}



