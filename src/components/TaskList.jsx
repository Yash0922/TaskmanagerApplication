import React, { Suspense, lazy } from 'react';

const TaskItem = lazy(() => import('./TaskItem'));

const TaskList = ({ tasks, onDelete }) => (
  <ul>
    <Suspense fallback={<div>Loading...</div>}>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </Suspense>
  </ul>
);

export default TaskList;