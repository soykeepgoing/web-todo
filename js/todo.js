const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let toDos = []; 

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    li.id = newToDo.id;
    span.innerText = newToDo; 
    button.innerText = '✅ Done';
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function submitToDo(event){
    event.preventDefault();
    const newToDoInput = toDoInput.value;
    const newToDoObj = {
        text: newToDoInput,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoInput);
    saveToDos(newToDoObj);
    toDoInput.value = '';
}

toDoForm.addEventListener("submit", submitToDo);