import React, { useState } from "react";
import { MdDelete } from 'react-icons/md';

import "./App.css";

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const inicialTasks = [
    { id: 1, title: 'Estudar' , checked: false },
    { id: 2, title: 'Lista' , checked: false },
    { id: 2, title: 'Readme' , checked: false }
  ]

  const [value, setValue] = useState('');
  const [tasks, ] = useState(inicialTasks);

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    console.log('submit', value);
    erase();
  }

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
