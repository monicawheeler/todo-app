$(document).ready(taskApplication);

function taskApplication() {
    //console.log('jq and client.js running');

    // on load functions
    getTasks();

    // Event Listeners
    $('#addTaskButton').on('click', getTasks);

}

function getTasks() {
    $.ajax({
        method: 'GET',
        url: '/tasks',
        success: displayAllTasks
    });
}

function displayAllTasks(tasks) {
    $('#taskList').empty();
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        console.log('task', task);
        $('#taskList').prepend(`<li><span class="task-description">${task.description}</span> <button class="completeButton">Delete</button><button class="deleteButton">Complete</button></li>`)
    }
}