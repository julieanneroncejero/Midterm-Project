import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputType, setInputType] = useState("");

  const handleInput = (event) => {
    setInputType(event.target.value);
  };

  const addTodo = () => {
    if (inputType.trim() !== '') {
      setTasks([...tasks, inputType]);
      setInputType("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = tasks.filter((_, i) => i !== index);
    setTasks(updatedTodos);
  };

  return (
    <div>
      <div className='todoContainer'>
        <div className='list'>
        <input className="input" type="text" value={inputType} onChange={handleInput} placeholder="Todo tasks..." />
        <button onClick={addTodo} className='add-btn'>Add</button>
        {tasks.map((value, index) => (
            <div key={index}>
            <div className='TodoListContainer'>
                <div className='data-row'>
                    <div>
                        <div className='info'>{value}</div>
                    </div>
                    <button className='del-btn' onClick={() => deleteTodo(index)}>Delete</button>
                </div>
            </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}
export default TodoList;