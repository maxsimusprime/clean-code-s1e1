const addButton = document.querySelector('#add-task-button');
const addInput = document.querySelector('#add-task-input');
const toDoList = document.querySelector('#todo-list');
const completedList = document.querySelector('#complited-list');


addButton.addEventListener('click', () => {
  const taskContent = addInput.value;
  if (taskContent) {
    toDoList.insertAdjacentHTML('beforeend', `
      <li>
        <div class="task__item item">
        <input class="item__checkbox" type="checkbox">
        <label class="item__label">${taskContent}</label>
        <input class="item__input_disabled" type="text" value="${taskContent}">
        <button class="item__button action-button">Edit</button>
        <button class="item__button delete-button">
          <img class="delete-button__icon" src="./remove.svg" alt="remove icon">
        </button>
        </div>
      </li>`);
    addInput.value = '';
    console.log('Add Task...');
    console.log('AJAX Request');
  }
});


toDoList.addEventListener('click', (event) => {
  const eventButton = event.target.closest('.item__button');
  const eventCheckbox = event.target.closest('.item__checkbox');
  const eventTask = event.target.closest('.item');
  const taskLabel = eventTask.childNodes[3];
  const taskInput = eventTask.childNodes[5];
  const taskButton = eventTask.childNodes[7];

  if (eventButton && eventButton.classList.contains('action-button')) {
    taskButton.innerHTML = taskButton.innerHTML === 'Save' ? 'Edit' : 'Save';
    taskLabel.className = taskLabel.className === 'item__label' ? 'item__label_disabled' : 'item__label';
    taskInput.className = taskInput.className === 'item__input' ? 'item__input_disabled' : 'item__input';
    taskLabel.innerHTML = taskInput.value;
  }

  if (eventButton && eventButton.classList.contains('delete-button')) {
    eventTask.remove();
  }

  if (eventCheckbox) {
    taskLabel.className = 'item__label_compleated';
    taskInput.className = 'item__input_disabled';
    taskButton.innerHTML = 'Edit';
    completedList.append(eventTask.closest('li'));
  }
});


completedList.addEventListener('click', (event) => {
  const eventButton = event.target.closest('.item__button');
  const eventCheckbox = event.target.closest('.item__checkbox');
  const eventTask = event.target.closest('.item');
  const taskLabel = eventTask.childNodes[3];
  const taskInput = eventTask.childNodes[5];
  const taskButton = eventTask.childNodes[7];

  if (eventButton && eventButton.classList.contains('action-button')) {
    taskButton.innerHTML = taskButton.innerHTML === 'Save' ? 'Edit' : 'Save';
    taskLabel.className = taskLabel.className === 'item__label_compleated' ? 'item__label_disabled' : 'item__label_compleated';
    taskInput.className = taskInput.className === 'item__input' ? 'item__input_disabled' : 'item__input';
    taskLabel.innerHTML = taskInput.value;
  }

  if (eventButton && eventButton.classList.contains('delete-button')) {
    eventTask.remove();
  }

  if (eventCheckbox) {
    taskLabel.className = 'item__label';
    taskInput.className = 'item__input_disabled'
    taskButton.innerHTML = 'Edit';
    toDoList.append(eventTask.closest('li'));
  }
});