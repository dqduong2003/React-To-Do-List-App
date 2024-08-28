import React from 'react';

const ToDoList = ({ tasks, setTasks }) => {
    const handleToggleComplete = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <ul>
            {tasks.map(task => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    onToggleComplete={handleToggleComplete}
                    onDeleteTask={handleDeleteTask}
                />
            ))}
        </ul>
    );
};

const ToDoItem = ({ task, onToggleComplete, onDeleteTask }) => {
    return (
        <li className="todo-item">
            <input 
                className="inp-cbx" 
                type="checkbox" 
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
                id={`cbx-${task.id}`}
            />
            <label className="cbx" htmlFor={`cbx-${task.id}`}>
                <span>
                <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
                </span>
            </label>
            <span 
                className='todo-item-text' 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
                {task.text}
            </span>
            <button onClick={() => onDeleteTask(task.id)} className='delete-button'>&#xD7;</button>
        </li>
    );
};

export default ToDoList;