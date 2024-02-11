# Earnest Fintech Limited
# Ankur Tiwari
# ankur73tiwari@gmail.com

# Earnest Fintech Limited assignment

This projects let's user to add their ID, images, password, friendId and a text.


# Installation

## Frontend
1. Type "npm init" to intilize npm
2. Type "npm install " to install dependendies
3. Type "npm run dev" to run development server

## Mysql backend
1. Make sure mysql is running locally and change below according to your database configuration in utils/db.js
     host: "Your host name" (e.g.,127.0.0.1),
    port: "database port ruuning" (e.g., 3306), // This line is optional since 3306 is the default port for MySQL
    user:" your database user" (e.g.,  "root"),
    password: "Your mysql database password",
    database: "Your database name ideally taskmanagement which have a class named tasks",
    namedPlaceholders: true,
2. schema for tasks table should be 
CREATE TABLE tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    task_title VARCHAR(255) NOT NULL,
    task_description TEXT,
    task_completed BOOLEAN DEFAULT false
);


2. Type "npm init" to intilize npm
3. Type "npm install " to install dependendies
4. Type "nodemon app.js" or "node app.js" to start express server


#### During starting these server please ensure no other server is running on port  5174, 8000 and mysql server is running.

#task checklist
Requirements:
1. Backend (Express.js): (https://github.com/ankur731/taskmanagement-backend)
● Create a RESTful API for managing tasks. | Done
● Implement endpoints for:Retrieving all tasks | Done
● Adding a new task | Done
● Updating a task's status (completed or not) | Done
● Deleting a task | Done


Database (SQL):
3. Create a "tasks" table with the following columns:
● id (auto-incrementing primary key) |Done
● title (string) | Done
● description (string) | Done
● completed (boolean) | Done


4. Frontend (React): | https://github.com/ankur731/taskmanagement-frontend
Create a simple UI with the following features:
● Display a list of tasks with their titles, descriptions, and completion status. |Done
● Provide a form to add a new task. |Done
● Include a button to mark a task as completed or not. |Done
● Implement a button to delete a task. |Done


# Usage
1. In the form type title and description with minimum 10 character both value are required 
2. Click on complete to mark the task as completed 
3. Click on Delete to mark the task as deleted
