var addButton = document.getElementById("btnAdd");
var listItems = document.getElementsByTagName("li");

function setEmptyTodo() {
    var str = localStorage.getItem("todoDatabase");
    var todoObj = JSON.parse(str);
    if (todoObj == undefined) {
        todoObj = {
            todos: [
            ]
        }
        reloadLocalStorage(todoObj)
    }

}

setEmptyTodo();
render();


addButton.addEventListener("click", function () {
    var inputTodo = document.getElementById("input");
    var text = inputTodo.value;
    addToLocal(text);
    inputTodo.innerText = "";
    render();
    clearInputForm(inputTodo);

});


function addToLocal(text) {
    console.log(text);
    var str = localStorage.getItem("todoDatabase");
    var todoObj = JSON.parse(str);

    if (text != "") {
        todoObj.todos.push(
            {text: text, completed: false}
        );
    }
    console.log(todoObj);
    reloadLocalStorage(todoObj);

}


function remove(deletedItem) {

    var closeArray = Array.prototype.slice.call(document.getElementsByClassName('close'));
    var index = closeArray.indexOf(deletedItem);
    console.log(index);
    var str = localStorage.getItem("todoDatabase");
    var todoObj = JSON.parse(str);
    todoObj.todos.splice(index, 1);
    reloadLocalStorage(todoObj);
    render();

}

function toggleCompleted(item) {
    var objstr = localStorage.getItem("todoDatabase");
    var obj = JSON.parse(objstr);
    var todoList = Array.prototype.slice.call(document.getElementsByTagName("li"));
    var index = todoList.indexOf(item);
    console.log(obj.todos[index].completed);
    if (obj.todos[index].completed === true) {
        obj.todos[index].completed = false;
    } else {
        obj.todos[index].completed = true;
    }
    console.log(obj.todos[index].completed)
    reloadLocalStorage(obj)
    render();
}

function reloadLocalStorage(obj) {
    localStorage.clear();
    localStorage.setItem("todoDatabase", JSON.stringify(obj));
}

function render() {
    clearTodoList();
    renderTodolist();

}

function clearTodoList() {
    var todoUnorderedList = document.getElementById("list");
    todoUnorderedList.innerHTML = "";
}

function renderTodolist() {
    var todoUnorderedList = document.getElementById("list");
    var objstr = localStorage.getItem("todoDatabase");
    var obj = JSON.parse(objstr);
    for (var i = 0; i < obj.todos.length; i++) {
        todoText = obj.todos[i].text;
        if (todoText != "") {
            var li = document.createElement("li");
            li.innerHTML = todoText + "<span onclick=\"remove(this)\" class =\"close\">x</span>";
            li.setAttribute("onClick", "toggleCompleted(this)")
            if (obj.todos[i].completed === true) {
                li.classList.add("completed");
            }
            todoUnorderedList.appendChild(li);
        }
    }
}

function clearInputForm(inputElement) {
    inputElement.value = "";
}
