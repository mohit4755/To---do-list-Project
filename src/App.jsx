import { useState } from 'react';
import Header from './Components/Header';
import Todolist from './Components/Todolist';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), task, completed: false }]); 
    }
  };

  const toggleTodo = (id) => {
    setTasks(tasks.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTasks(tasks.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTasks(tasks.map(todo => 
      todo.id === id ? { ...todo, task: newText } : todo 
    ));
  };

  return (
    <div className='min-h-screen bg-gradient-to-t from-teal-300 to-blue-400 flex flex-col items-center justify-center'>
      <div className='my-10 mx-10 bg-blue-300 rounded-lg shadow-xl min-h-[70vh] min-w-[80]'>
        <Header addTask={addTask} />
        <Todolist 
          tasks={tasks} 
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo} 
          editTodo={editTodo}
        /> 
      </div>
    </div>
  ); 
}

export default App;