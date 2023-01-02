const inputField = document.getElementById('inputValue');
const addBtn = document.getElementById('add');
const taskBox = document.getElementById('taskBox');
const searchInput = document.getElementById('searchInput');
let taskArr;



addBtn.addEventListener('click', () => {
    let userTask = inputField.value;
    if (userTask) {
        const task = localStorage.getItem('task');
        if (task == null) {
            taskArr = [];
        }
        else {
            taskArr = JSON.parse(task);
            // console.log(taskArr);
        }

        taskArr.push(userTask);

        localStorage.setItem('task', JSON.stringify(taskArr));
        // console.log(show2);
        showTodo(userTask);
    }
});

showTodo();

function showTodo() {
    let localStorageTask = localStorage.getItem('task');
    taskArr = JSON.parse(localStorageTask);
    // console.log(localStorageTask);
    // console.log(taskArr);
    let li = '';

    taskArr.forEach((element, ind) => {
        li += `<li class="list-group-item-action list-group-item d-flex justify-content-between">${element}
                         <button class="btn btn-danger fs-5" onclick=deleteTask(${ind})>
                             <i class="bi bi-trash"></i>
                         </button>
                  </li>`;


    });
    taskBox.innerHTML = li;

    inputField.value = '';
}

function deleteTask(e) {
    // e.parentElement.remove();
    // console.log(e);
    let localStorageTask = localStorage.getItem('task');

    listArray = JSON.parse(localStorageTask);

    console.log(listArray);

    listArray.splice(e, 1);

    localStorage.setItem('task', JSON.stringify(listArray));
    showTodo();

}

searchInput.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    let text = e.target.value;

    let taskItem = taskBox.children;

    Array.from(taskItem).forEach((elem) => {
        // console.log(elem.innerText.toLowerCase().includes(text));
        if(elem.innerText.toLowerCase().includes(text.toLowerCase())){
            elem.classList.remove('removeItem');
            // console.log(elem.style);
        }
        else{
            elem.classList.add('removeItem');
        }
    })



})




