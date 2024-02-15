// // Selecting DOM elements
// const taskInput = document.getElementById('taskInput');
// const addTaskBtn = document.getElementById('addTaskBtn');
// const todoList = document.getElementById('todoList');

// // Add task function
// function addTask() {
//   const taskText = taskInput.value.trim();
//   if (taskText === '') return; // Prevent adding empty tasks

//   const taskItem = document.createElement('div');
//   taskItem.classList.add('alert', 'alert-primary', 'alert-dismissible', 'fade', 'show');
//   taskItem.setAttribute('role', 'alert');
//   taskItem.innerHTML = `
//     <span>${taskText}</span>
//     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//       <span aria-hidden="true">&times;</span>
//     </button>
//   `;
  
//   todoList.appendChild(taskItem);
//   taskInput.value = ''; // Clear input field after adding task
// }

// // Event listener for adding a task
// addTaskBtn.addEventListener('click', addTask);
    


const addTask=()=>{
    let inp=document.getElementById("inp")
    
}