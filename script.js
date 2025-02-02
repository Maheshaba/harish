let addTask = document.getElementById("add-task-btn")
addTask.addEventListener('click', function () {
         var newTask = document.getElementById("todo-input").value
         //      alert("New task :" + newTask) 
         var li = document.createElement("li")
         li.innerHTML = newTask
         var ul = document.getElementById("todo-list")
         ul.appendChild(li)
})