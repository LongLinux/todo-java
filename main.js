//selectors
const todoInput = document.querySelector('.new-input');
const todoButton = document.querySelector('.add-input');
const todoList = document.querySelector('.todo-lists');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    //prevent from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = 'Done';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Del';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //Delete Todo
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
            todo.remove();
    }

    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
