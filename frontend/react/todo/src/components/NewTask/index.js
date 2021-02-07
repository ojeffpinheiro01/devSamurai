import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTask = ({ onNewTask }) => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if (onNewTask) {
      onNewTask(value);
    }
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
    <input
      className="new-task"
      placeholder="o que precisa ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

NewTask.propTypes = {
  onNewTask: PropTypes.func.isRequired,
};

export default NewTask;
