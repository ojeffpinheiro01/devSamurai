import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

import './style.css'

const TaskList = ({ tasks, onToggle, onDelete }) => (
  <ul className="tasks-list">
    {tasks.map((task) => (
      <li key={task.id.toString()}>
        <span
          className={['task', task.checked ? 'checked' : ''].join(' ')}
          onClick={() => onToggle && onToggle(task)}
          onKeyPress={() => onToggle && onToggle(task)}
          role="button"
          tabIndex={0}
        >
          {task.title}
        </span>
        <button
          className="remove"
          type="button"
          onClick={() => onDelete && onDelete(task)}
        >
          <MdDelete size={28} />
        </button>
      </li>
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
