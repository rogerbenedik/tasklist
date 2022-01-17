// define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-taks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
// make load all event listerners
loadEventListeners();
// load all event list.
function loadEventListeners(){
//add task event
form.addEventListener('submit', addTask);
//remove taask event
taskList.addEventListener('click', removeTask);
}
// add task

function addTask(e) {

if(taskInput.value === '') {
    alert('Please add a task!');
}

//create li element
const li = document.createElement('li');
li.className ='collection-item';
//create textn node and append to li
li.appendChild(document.createTextNode(taskInput.value));
//create new Link element
const link = document.createElement('a');
//add class
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class="fas fa-window-close"></i>';
// append the link to li
li.appendChild(link);
//append li to ul
taskList.appendChild(li);
//clear input
taskInput.value = '';

    e.preventDefault();
}

//remove task
function removeTask(e){   
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        if(confirm('Are you sure?')){    

            e.target.parentElement.parentElement.remove();
        }
    }
}
