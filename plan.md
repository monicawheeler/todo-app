#Todo Application

## Database
- [x] Create a `todo_app` database
    - [x] Create a `tasks` table
        - [x] `tasks` table contains columns for id(primary key), description, complete (default 'No'), date\_created (date when added), category\_id (references category table)
    - [x] Create a `categories` table
        - [x] `categories` table contains columns for id(primary key), description

## Setup
- [x] `npm init`
- [x] folder and files to get server up

## DOM
Organize DOM as needed along the way
- [x] Create input for task 
- [x] Create button for Add Task
- [x] Create a container to hold all tasks
- [x] Create a container to hold the completed tasks (remove completed button)

## Client Side (client.js)
- [x] POST to send new task to database
    - [x] On click of the Add Task button, send value of task input to database
    - [x] Run the function to get the tasks to refresh the list
- [x] GET to request all tasks in the database
    - [x] On load of page, get the tasks
    - [x] Loop through response and create a list of tasks 
    - [x] Each task will have a Complete and Delete button
- [x] PUT to update the task in the database as complete
    - [x] Add `data-id` to the task element
    - [x] On click of the Complete button, update database
    - [x] Run the function to get the tasks to refresh the list
    - [x] Hide the complete button and move the completed list item to completedTasks list 
- [x] DELETE to delete the task in the database 
    - [x] On click of the Delete button, remove task from database
    - [x] Run the function to get the tasks to refresh the list
- [x] PUT to update the task in the data as uncomplete

## Server Side
- [x] post - matching post on client side, get new task
    - [x] `INSERT INTO` database
- [x] get - matching get on client side, grab all tasks
    - [x] `SELECT` from database
- [x] put - matching put on client side, update complete to true
    - [x] `UPDATE` database
- [x] delete - matching delete on client side, delete entire task
    - [x] `DELETE` database
- [x] put - matching put on client side, update complete to false

## Style planning/ideas
- [x] [Inspiration for style](https://dribbble.com/shots/3642749-Team-Chat-To-Do/attachments/813699)
- [x] Load fonts and font awesome
- [x] Style complete and delete buttons as a checkmark and an 'x'

## Additional features
- [x] GET/SELECT categories
- [x] POST/INSERT category_id in to tasks table
- [x] TODO - style dropdown
- [x] TODO - add small text in each task describing its category
- [x] TODO - add an arrow on the right in task line item to indicate an action is available
- [x] TODO - add a count to h2's for example: "4 TASKS"
