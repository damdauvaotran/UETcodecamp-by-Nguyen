var addButton = document.getElementById("btnAdd");
var todoUnorderedList = document.getElementById("list");

addButton.addEventListener("click", function () {
    var newLi = document.createElement("li");
    var text = input.value;
    newLi.innerHTML = text + "<span class=\"close\">x</span>";
    todoUnorderedList.appendChild(newLi);
    input.value = "";
    refreshRender();
})

function refreshRender() {
    var todoList = document.getElementsByTagName("li");
    var closeBtn = document.getElementsByClassName("close");
    for (var i =0; i< todoList.length; i++){
        closeBtn[i].addEventListener("click", function () {
            var div =this.parentElement;
            div.remove();
        })
    }
}
