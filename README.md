# React To-Do List Application

This project is a simple To-Do List application built using React. It allows users to add tasks, mark them as complete, delete tasks, and persists the tasks using `localStorage` so that the list remains intact even after a browser refresh.

## Features

- **Add New Task**: Users can type a task in the input field and add it to the list by clicking the "Add" button or pressing Enter.
- **Display Tasks**: The list of tasks is displayed below the input field.
- **Mark as Complete**: Each task has a checkbox that, when clicked, marks the task as complete or incomplete.
- **Delete Task**: Each task has a delete button that removes the task from the list.
- **Persist Tasks**: The tasks are stored in `localStorage` to ensure the list persists when the page is refreshed.
- **Animations**: When a new task is added, it slides in from the left, creating a smooth animation effect.

## Components

The application is divided into the following components:

1. **ToDoApp**: The main component that holds the state and renders other components.
2. **ToDoInput**: A component with an input field and a button to add new tasks.
3. **ToDoList**: A component that renders a list of `ToDoItem` components.
4. **ToDoItem**: A component that represents a single to-do item with a checkbox to mark it as complete and a button to delete it.

## State Management

The application uses React's `useState` hook to manage the state of the tasks and the input field. The to-do items are stored as objects with `id`, `text`, and `completed` properties.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/react-todo-list.git
   cd react-todo-list
    ```
2. **Install Dependencies:** Make sure you have Node.js and npm installed. Then, run:
    ```
    npm install
    ```
3. **Run the Application**:
    ```
    npm start
    ```

## Demo

[Watch the demo video](demo/todo-app.mp4)