import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

import './App.css';

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    setTasks([
      ...tasks,
      { id: new Date().getTime(), title: value, checked: false },
    ]);
    erase();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <input
          className="new-todo"
          placeholder="o que precisa ser feito?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className="tasks-list">
          {tasks.map((task) => (
            <li key={task.id.toString()}>
              <span className="todo">{task.title}</span>
              <button className="remove" type="button">
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
