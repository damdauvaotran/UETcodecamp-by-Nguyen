var btnAdd  = document.getElementById("btnAdd");
var todoUl = document.getElementById("list") ;
var input = document.getElementById("input");



btnAdd.addEventListener("click", function () {
    var text= input.value;


})

var todoStorage={
    TodoList:[
{
    text:"An example of Local storage",
    completed:true
},{
    text:"Another eg of local storage",
    completed:false
}]
}
var todoStr = JSON.stringify(todoStorage);
localStorage.setItem("TodoList",todoStr);
console.log(todoStorage);
function addToStorage(text) {



}
