import React, { useState } from 'react';

import NewTodo from './components/NewTask';
import TaskList from './components/TaskList';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const onNewTask = (value) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
  };

  const onToggle = (task) => {
    setTasks(
      tasks.map((obj) =>
        obj.id === task.id ? { ...obj, checked: !task.checked } : obj
      )
    );
  };

  const onDelete = (task) => {
    setTasks(tasks.filter((obj) => obj.id !== task.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTask={onNewTask} />
        <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
      </section>
    </section>
  );
};

export default App;
