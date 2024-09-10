import React, { useRef } from 'react';

const UncontrolledTaskForm = ({ onAddTask }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (title) {
      onAddTask({ id: Date.now(), title });
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter task title (uncontrolled)"
      />
      <button type="submit">Add Task (Uncontrolled)</button>
    </form>
  );
};

export default UncontrolledTaskForm;