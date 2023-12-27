const addBtn = document.getElementById('addBtn');
const inputTag = document.querySelector('.inputField input');
const filters = document.querySelectorAll('.filters span');
const clearAll = document.getElementById('allClear');
const taskBox = document.getElementsByClassName('taskBox')[0];
const footer = document.getElementById('footer');;
let count = 1;

addBtn.addEventListener('click', () => {
    let input = inputTag.value;
    addTodo(input);
});

inputTag.addEventListener("keyup", (e) => {
    // console.log(e.key);
    if (inputTag.value != '') {
        if (e.key == "enter" || e.key == "Enter") {
            addTodo();
        }
    }
})

function addTodo() {
    let value = inputTag.value;
    let li = `<li class="task all active pending">
                 <label for="${count}">
                     <input type="checkbox" id="${count}" onclick="updateStatus(this)">
                     <p>${value}</p>
                 </label>
                 <div class="settings">
                     <i class="fa-solid fa-ellipsis"></i>
                     <ul class="taskMenu">
                         <li class="edit">Edit</li>
                         <li class="delete">Delete</li>
                     </ul>
                 </div>
             </li>`;
    taskBox.innerHTML += li;

    footer.innerHTML = `<div>You have total <span id="number">${count}</span> Task</div>`;
    count++;
    
    inputTag.value = '';
}

function showFilter(text) {

    let task = Array.from(document.querySelectorAll('.task'));
    // console.log(task);
    count = 1;
    task.forEach((elem) => {
        elem.classList.remove('active');
        if(elem.classList.contains(text)){
            elem.classList.add("active");
            footer.innerHTML = `<div>You have ${text} <span id="number">${count++}</span> Task</div>`;
            return;
        }
        
    })

}

filters.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        // console.log(e.target.innerText);
        let text = e.target.innerText.toLowerCase();
        showFilter(text);
        document.querySelector("span.active").classList.remove('active');
        elem.classList.add('active');

    })
})


function updateStatus(selectedTask) {
    // console.log(selectedTask.id);
    if (selectedTask.checked) {
        console.log("he Checked");
        selectedTask.parentElement.parentElement.classList.remove('pending');
        selectedTask.parentElement.parentElement.classList.add('completed');
    }
    else {
        console.log("he not checkded");
        selectedTask.parentElement.parentElement.classList.remove('completed');
        selectedTask.parentElement.parentElement.classList.add('pending');
    }

}



















