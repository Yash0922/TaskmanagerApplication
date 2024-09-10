import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/tasksSlice';
import TaskForm from './components/TaskForm';
import UncontrolledTaskForm from './components/UncontrolledTaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate fetching tasks
    const fetchTasks = async () => {
      const mockTasks = [
        { id: 1, title: 'Learn React' },
        { id: 2, title: 'Master Redux' },
      ];
      mockTasks.forEach(task => dispatch(addTask(task)));
    };
    fetchTasks();

    // Cleanup function
    return () => {
      console.log('Component unmounting, perform cleanup here if needed');
    };
  }, [dispatch]);

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <UncontrolledTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;