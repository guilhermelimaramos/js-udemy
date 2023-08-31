const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const listTask = document.querySelector('.list-tasks');

btnTask.addEventListener('click', function(event){
    event.preventDefault();
    if(!inputTask.value) return;
    
    createTask(inputTask.value);
    
});

inputTask.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    if (!inputTask.value) return;
    
    createTask(inputTask.value);
    
  }
})

createTask = (text) => { 
  const li = createLi();
  li.innerText = text;
  listTask.appendChild(li);
  createDeleteButton(li);
  inputClear();
  saveTasks();
}

createLi = () => { 
  const li = document.createElement('li')
  return li;
  
}

createDeleteButton = (li) => {
  li.innerText += ' ';
  const deleteButton = document.createElement('button');
  // deleteButton.classList.add('delete')
  deleteButton.setAttribute('class', 'delete')
  deleteButton.innerHTML = 'Delete';
  li.appendChild(deleteButton)
}

inputClear = () => {
  inputTask.value = '';
  inputTask.focus();
}

saveTasks = () => {
  const tasksLi = listTask.querySelectorAll('li');
  const toDoList = [];
  for (let task of tasksLi){
    let textTask = task.innerText;
    textTask = textTask.replace('Delete','').trim();
    toDoList.push(textTask)
  }
  
  const taskJSON = JSON.stringify(toDoList)
  localStorage.setItem('tasks', taskJSON)
}

addSaveTasks = () => {
  const tasks = localStorage.getItem('tasks')
  const toDoList = JSON.parse(tasks)
  
  for (task of toDoList) {
    createTask(task);
  }
}

document.addEventListener('click', function (event) {
  const target = event.target;
  if (target.classList.contains('delete')){
    target.parentElement.remove();
    saveTasks();
  }
});

addSaveTasks();