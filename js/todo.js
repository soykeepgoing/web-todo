const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    li.id = newToDo.id;
    span.innerText = newToDo.text;
    button.innerText = '✅ Done';
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function submitToDo(event){
    event.preventDefault();
    newToDo = {
        text: toDoInput.value,
        id: Date.now()
    }
    paintToDo(newToDo);
    toDoInput.value = '';
}

toDoForm.addEventListener("submit", submitToDo);