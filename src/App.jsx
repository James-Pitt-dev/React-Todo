import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CSSBaseline from "@mui/material/CssBaseline";
import TodoList from './components/TodoList';

const initialTodos = [
  {id: '1', text:'Walk the dog', completed: false}
]

function App() {

  return (
    <>
     <CSSBaseline />
     <h1>Todos</h1>
     <TodoList />
    </>
  )
}

export default App
