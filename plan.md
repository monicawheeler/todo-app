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
- [ ] Create input for task 
- [ ] Create button for Add Task
- [ ] Create a container to hold all tasks
- [ ] Create a container to hold the completed tasks (remove completed button)

## Client Side (client.js)
- [ ] POST to send new task to database
    - [ ] On click of Add Task, send value of task input to database
    - [ ] Run the function to get the tasks to refresh the list
- [ ] GET to request all tasks in the database
    - [ ] On load of page, get the tasks
    - [ ] Loop through response and create a list of tasks 
    - [ ] Each task will have a Complete and Delete button
- [ ] PUT to update the task in the database as complete
    - [ ] On click of the Complete button, update database
- [ ] DELETE to delete the task in the database 
    - [ ] On blick of the Delete button, remove task from database
    - [ ] Run the function to get the tasks to refresh the list

## Server Side
- [ ] post - matching post on client side, get new task
    - [ ] `INSERT INTO` database
- [ ] get - matching get on client side, grab all tasks
    - [ ] `SELECT` from database
- [ ] put - matching put on client side, update complete column
    - [ ] `UPDATE` database
- [ ] delete - matching delete on client side, delete entire task
    - [ ] `DELETE` database
