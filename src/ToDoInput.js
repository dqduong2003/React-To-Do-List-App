import React from 'react';

const ToDoInput = ({ taskText, onAddTask, onTaskTextChange }) => {
    return (
        <div className='row'>
            <input
                type="text"
                id='input-box'
                value={taskText}
                onChange={onTaskTextChange}
                onKeyUp={(e) => e.key === 'Enter' && onAddTask()}
                placeholder="Add a new task"
            />
            <button onClick={onAddTask} id='input-box-button'>Add</button>
        </div>
    );
};

export default ToDoInput;