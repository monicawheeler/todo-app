$(document).ready(taskApplication);

function taskApplication() {
    //console.log('jq and client.js running');
    // Event Listeners
    $('#addTaskButton').on('click', getTasks);

    // on load functions
    getTasks();
}

function getTasks() {
    $.ajax({
        method: 'GET',
        url: '/tasks',
        succuess: function(response) {
            console.log('response from GET', response);
            
        }
    });
}