const taskInput = document.querySelector('.task');
const addTaskButton = document.querySelector('.addTask');
const taskList = document.querySelector('.taskList');


function addTask() {
    
    const deleteButton = createDomElement('button', 'x');
    const taskContainer = createDomElement('div', '');
    const task = createDomElement('p', getTaskContent() );

    addDomElement( taskContainer, taskList);
    addDomElement( task, taskContainer);
    addDomElement( deleteButton, taskContainer);
    returnData();    

    deleteButton.addEventListener('click', removeTask);
    taskContainer.addEventListener('click', editTask);
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
function returnData (dataToReturn) {
    return dataToReturn;
}


addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) =>{
    e.code == 'Enter'? addTask() : false;   
})


