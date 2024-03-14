import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './TodoListComponent/TodoList.jsx'
import './Styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
)
