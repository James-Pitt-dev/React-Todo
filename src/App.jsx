import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CSSBaseline from "@mui/material/CssBaseline";
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
     <CSSBaseline />
     <Navbar />
     <TodoList />
    </>
  )
}
// sss
export default App
