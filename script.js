const taskInput = document.querySelector('.task');
const addTaskButton = document.querySelector('.addTask');
const taskList = document.querySelector('.taskList');

function addTask() {
    
    const deleteButton = createDomElement('button', 'x');
    const taskContainer = createDomElement('div', '');
    const task = createDomElement('p', getTaskContent() );
    const editTaskInput = createDomElement('input', '');
    editTaskInput.classList = 'hide';

    addDomElement( taskContainer, taskList);
    addDomElement( task, taskContainer);
    addDomElement( deleteButton, taskContainer);       
    //remove task 
    deleteButton.addEventListener('click', removeTask);
    //click task and toggle p with input to edit task
    task.addEventListener('click', function editTaskMode () {
        task.classList.toggle('hide');
        editTaskInput.classList.toggle('hide');        
        addDomElement( editTaskInput, taskContainer);
        editTaskInput.value = task.textContent;
        editTaskInput.focus();                    
    });
    // toggle input with p to stop edit task value
    editTaskInput.addEventListener('focusout', editTask);    

    function editTask() {
        editTaskInput.classList.toggle('hide');
        task.classList.toggle('hide');
        task.textContent = editTaskInput.value;        
    }
    //clear input after add new task to prep for next one
    clearValue(taskInput);
}

function getTaskContent () {
    let taskContent = taskInput.value;
    return taskContent;
}

function addDomElement (element, destination) {
    destination.appendChild(element);
}

function createDomElement (type, content) {
    let name = document.createElement(type);
    name.textContent = content;
    return name;
}
function removeTask() {
    this.parentNode.remove();
}

function clearValue(element) {
    element.value = '';
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) =>{
    e.code == 'Enter'? addTask() : false;   
})


