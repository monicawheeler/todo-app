$(document).ready(taskApplication);

function taskApplication() {
    //console.log('jq and client.js running');

    // on load functions
    getTasks();
    getCategories();
    countInputCharacters();

    // Event Listeners
    $('#addTaskButton').on('click', addTask);
    $('#taskList').on('click', '.completeButton', completeTask);
    $('#completedTasks').on('click', '.uncompleteButton', uncompleteTask);
    $('#taskList, #completedTasks').on('click', '.deleteButton', deleteTask);
    $('#taskDescription').on('keyup', countInputCharacters);

    // Prevent form default submit
    $('#submitTaskForm').submit(function(e){
        e.preventDefault();
    });
}

function countTasks() {
    // Count in progress and completed tasks
    let inprogressCount= ($('#taskList li').length).toString();
    let completedCount= ($('#completedTasks li').length).toString();
    $('.inprogress-title .task-count').text(inprogressCount);
    $('.completed-title .task-count').text(completedCount);  
} // end countTasks

function countInputCharacters() {
    let inputStringLength = $('#taskDescription').val().length;
    $('#inputCount').text(inputStringLength);
} // end countInputCharacters

function getTasks() {
    $.ajax({
        method: 'GET',
        url: '/tasks',
        success: function(response){
            displayAllTasks(response);
            countTasks();
            // Clear the character counter
            $('#inputCount').text('0');
        }
    });
} // end getTasks

function getCategories() {
    $.ajax({
        method: 'GET',
        url: '/tasks/categories',
        success: displayCategories
    });
} // end getCategories

function displayCategories(categories) {
    // clear the categorySelect
    $('#categorySelect').empty();
    // loop through categories and append to select on DOM
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        $('#categorySelect').append(`<option value="${category.id}">${category.description}</option>`);
    }
} // end getCategories


function displayAllTasks(tasks) {
    // clear the taskList and completedTasks prior to prepending below
    $('#taskList').empty();
    $('#completedTasks').empty();
    // loop through tasks and prepend taskList on DOM
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        let categoryText = '';
        if(task.category_id === 1) {
            categoryText = 'Low Priority';
        } else if (task.category_id === 2) {
            categoryText = 'Medium Priority';
        } else {
            categoryText = 'High Priority';
        }
        
        if(task.complete != true) {
            $('#taskList').prepend(`<li class="task-item" data-id="${task.id}"><span class="task-description">${task.description}</span><span class="button-wrapper"><button class="completeButton"><i class="fa fa-fw fa-check" aria-hidden="true"></i></button><button class="deleteButton"><i class="fa fa-minus fa-fw" aria-hidden="true"></i></button></span><div class="category-text">${categoryText}</div></li>`);
        } else {
            $('#completedTasks').prepend(`<li class="task-item" data-id="${task.id}"><span class="task-description">${task.description}</span><span class="button-wrapper"><button class="uncompleteButton"><i class="fa fa-fw fa-check" aria-hidden="true"></i></button><button class="deleteButton"><i class="fa fa-minus fa-fw" aria-hidden="true"></i></button></span><div class="category-text">${categoryText}</div></li>`);
        }
    }
} // end displayAllTasks

function addTask() {
    let taskToSend = {
        description: $('#taskDescription').val(),
        categoryId: $('#categorySelect').val()
    };

    let inputStringLength = $('#taskDescription').val().length;

    if(inputStringLength > 255) {
        alert('Please enter 255 characters or less');
    }

    if(taskToSend.description != '') {
        $.ajax({
            method: 'POST',
            url: '/tasks',
            data: taskToSend,
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
    let currentTaskId = $(this).parents('.task-item').data('id');
    $.ajax({
        method: 'PUT',
        url: '/tasks/complete/' + currentTaskId,
        success: function(response) {
            getTasks();            
        }
    });
} // end completeTask

function uncompleteTask() {
    let currentTaskId = $(this).parents('.task-item').data('id');
    $.ajax({
        method: 'PUT',
        url: '/tasks/' + currentTaskId,
        success: function(response) {
            getTasks();            
        }
    });
} // end uncompleteTask

function deleteTask() {
    let currentTaskId = $(this).parents('.task-item').data('id');
    $.ajax({
        method: 'DELETE',
        url: '/tasks/' + currentTaskId,
        success: function(response) {
            getTasks();
        }
    });
} // end deleteTask
