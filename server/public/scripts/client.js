$(document).ready(taskApplication);

function taskApplication() {
    //console.log('jq and client.js running');

    // on load functions
    getTasks();

    // Event Listeners
    $('#addTaskButton').on('click', addTask);
    $('#taskList').on('click', '#completeButton', completeTask);
    //$('#taskList').on('click', '#deleteButton', deleteTask);
}

function getTasks() {
    $.ajax({
        method: 'GET',
        url: '/tasks',
        success: displayAllTasks
    });
} // end getTasks

function displayAllTasks(tasks) {
    // clear the taskList prior to prepending below
    $('#taskList').empty();
    // loop through tasks and prepend taskList on DOM
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        $('#taskList').prepend(`<li><span class="task-description">${task.description}</span> <button class="completeButton">Delete</button><button class="deleteButton">Complete</button></li>`)
    }
} // end displayAllTasks

function addTask() {
    let taskDescription = $('#taskDescription').val()
    if(taskDescription != '') {
        $.ajax({
            method: 'POST',
            url: '/tasks',
            data: {description: taskDescription},
            success: function (response) {
                console.log('response', response);
                getTasks();
            }
        });
    } else {
        // TODO: add model instead of alert
        alert('Please enter a task description');
    }
} // end addTask