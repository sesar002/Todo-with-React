import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export default function Task({task, onDelete, onCompleteToggle}){
  const deleteItem = () => {
    onDelete(task.id);
  }

  const changeCompleted = () => {
    onCompleteToggle(task.id);
  }

  let stil = {};

  if(task.completed){
    stil = {textDecoration: 'line-through'};
  }

  return (
    <div className='divtask'>
      <span className='span' style={stil} onClick={changeCompleted}>{task.text}</span>
      <button className='button' onClick={deleteItem} >X</button>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool
  }),
  onDelete: PropTypes.func,
  onCompleteToggle: PropTypes.func
};