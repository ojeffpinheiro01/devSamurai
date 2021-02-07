import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

import NewTodo from './components/NewTask'

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
  }

  const onToggle = (task) => {
    setTasks(
      tasks.map((obj) => 
      obj.id === task.id ? {...obj, checked: !task.checked} : obj)
    )
  }

  const onDelete = (task) => {
    setTasks(tasks.filter((obj) => obj.id !== task.id))
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTask={onNewTask} />
        <ul className="tasks-list">
          {tasks.map((task) => (
            <li key={task.id.toString()}>
              <span
              className={['task', task.checked ? 'checked' : ''].join(" ")}
              onClick={() => onToggle(task) }
              onKeyPress={() => onToggle(task) }
              role="button"
              tabIndex={0}
              >
                {task.title}
              </span>
              <button className="remove" type="button"
                onClick={() => onDelete(task) }>
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
