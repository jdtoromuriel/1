const input = document.getElementById("tasks__input");
const button = document.querySelector(".tasks__button");
const taskList = document.getElementById("tasks__list");
const maxTask = 4;
function addTask(){
    if(input.value){
        if (taskList.children.length >= maxTask) {
            alert("Haz alcanzado el límite máximo de tareas.");
            return;
        }

        // Add Task
        let newTask = document.createElement("article");
        newTask.classList.add("task");

        // Text task
        let text = document.createElement("p");
        text.innerText = input.value;
        newTask.appendChild(text);

        // Icons add & create containt
        let icons = document.createElement("div");
        icons.classList.add("icons");
        newTask.appendChild(icons);

        // Icons
        // Icon check
        let Iconcomplete = document.createElement('i');
        Iconcomplete.classList.add('bx', 'bxs-check-circle', 'icon-complete');
        Iconcomplete.addEventListener("click", completeTask)
        // Icon delete
        let Icondelete = document.createElement('i');
        Icondelete.classList.add('bx', 'bxs-trash', 'icon-delete');
        Icondelete.addEventListener("click", deleteTask)

        icons.append(Iconcomplete, Icondelete);

        // Add task to list

        taskList.appendChild(newTask);
    }else {
        alert("Porfavor ingresa una tarea")
    }
}

function completeTask(e){
    let task = e.target.parentNode.parentNode;
    task.classList.toggle('complete');
}

function deleteTask(e){
    let task = e.target.parentNode.parentNode;
    task.remove();
}

button.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});