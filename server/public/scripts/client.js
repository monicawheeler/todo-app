$(document).ready(taskApplication);

function taskApplication() {
    //console.log('jq and client.js running');

    // on load functions
    getTasks();

    // Event Listeners
    $('#addTaskButton').on('click', addTask);
    $('#taskList').on('click', '.completeButton', completeTask);
    $('#completedTasks').on('click', '.uncompleteButton', uncompleteTask);
    $('#taskList, #completedTasks').on('click', '.deleteButton', deleteTask);

    // Prevent form default submit
    $('#submitTaskForm').submit(function(e){
        e.preventDefault();
    });
}

function getTasks() {
    $.ajax({
        method: 'GET',
        url: '/tasks',
        success: displayAllTasks
    });
} // end getTasks

function displayAllTasks(tasks) {
    // clear the taskList and completedTasks prior to prepending below
    $('#taskList').empty();
    $('#completedTasks').empty();
    // loop through tasks and prepend taskList on DOM
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        
        if(task.complete != true) {
            $('#taskList').prepend(`<li class="task-item" data-id="${task.id}"><span class="task-description">${task.description}</span> <button class="completeButton"><i class="fa fa-fw fa-check" aria-hidden="true"></i></button><button class="deleteButton"><i class="fa fa-fw fa-times" aria-hidden="true"></i></button></li>`);
        } else {
            $('#completedTasks').prepend(`<li class="task-item" data-id="${task.id}"><span class="task-description">${task.description}</span><button class="uncompleteButton"><i class="fa fa-fw fa-check" aria-hidden="true"></i></button><button class="deleteButton"><i class="fa fa-fw fa-times" aria-hidden="true"></i></button></li>`);
        }
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
                // clear input field after successful response
                $('#taskDescription').val('');
            }
        });
    } else {
        alert('Please enter a task description');
    }
} // end addTask

function completeTask() {
    let currentTaskId = $(this).parent().data('id');
    $.ajax({
        method: 'PUT',
        url: '/tasks/complete/' + currentTaskId,
        success: function(response) {
            getTasks();            
        }
    });
} // end completeTask

function uncompleteTask() {
    let currentTaskId = $(this).parent().data('id');
    $.ajax({
        method: 'PUT',
        url: '/tasks/' + currentTaskId,
        success: function(response) {
            getTasks();            
        }
    });
} // end uncompleteTask

function deleteTask() {
    let currentTaskId = $(this).parent().data('id');
    $.ajax({
        method: 'DELETE',
        url: '/tasks/' + currentTaskId,
        success: function(response) {
            getTasks();
        }
    });
} // end deleteTask
