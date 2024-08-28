import './App.css';
import React, { useState, useEffect  } from 'react';
import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';

function ToDoApp() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [taskText, setTaskText] = useState('');

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskText.trim()) {  
        const newTask = createToDoItem(Date.now(), taskText);
        setTasks([...tasks, newTask]); 
        setTaskText('');  
    }
  };

  // Function to handle input text change
  const handleTaskTextChange = (e) => {
      setTaskText(e.target.value);
  };

  return (
    <div className='container'>
      <div className='todo-app'>
          <h2>To-Do List</h2>
          <ToDoInput
              taskText={taskText}
              onAddTask={handleAddTask}
              onTaskTextChange={handleTaskTextChange}
          />
          <ToDoList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

const createToDoItem = (id, text, completed = false) => {
  return {
      id: id,
      text: text,
      completed: completed
  };
};


export default ToDoApp;
