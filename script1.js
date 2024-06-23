document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('new-task');
    const todoImageInput = document.getElementById('task-image');
    const todoList = document.getElementById('todo-list');
    let taskCount = 0;

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(todoInput.value, todoImageInput.files[0]);
        todoInput.value = '';
        todoImageInput.value = '';
    });

    function addTask(task, imageFile) {
        taskCount++;
        const tr = document.createElement('tr');

        const tdNumber = document.createElement('td');
        tdNumber.textContent = taskCount;

        const tdTask = document.createElement('td');
        tdTask.textContent = task;

        const tdImage = document.createElement('td');
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                tdImage.appendChild(img);
            };
            reader.readAsDataURL(imageFile);
        }

        const tdAction = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(tr);
        });
        tdAction.appendChild(deleteButton);

        tr.appendChild(tdNumber);
        tr.appendChild(tdTask);
        tr.appendChild(tdImage);
        tr.appendChild(tdAction);

        todoList.appendChild(tr);
    }
});
