import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import {List, Box, Typography} from '@mui/material';
import TodoForm from './TodoForm';

  // fetch data from a database or local storage in this case
  // for initial data in list
  function getInitialData(){

    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data){
      return [];
    } else return data;
  }

  

  export default function TodoList(){

    const [todos, setTodos] = useState(getInitialData);
    
    //save to local storage, database stand in essentially
    useEffect(() => {
      localStorage.setItem(
        "todos",
        JSON.stringify(todos)
      )
    }, [todos]);

    function removeTodo(id){
      setTodos((prevTodos) => {
       return prevTodos.filter((t) => { //return?
        return t.id !== id;
       })
      });
    }

    const toggleTodo = (id) => {
      setTodos((prevTodos) => {
        return prevTodos.map((t) => {
          if (t.id === id){
            return {...t, completed: !t.completed}
          } else return t;
        });
      });
    }

    function addTodo(text){
      setTodos((prevTodos) => {
        return [...prevTodos, {text: text, id: crypto.randomUUID(), completed: false}]
      })
    }

    return (
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3
      }}>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            Todos
          </Typography>
        <List  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
            return <TodoItem todo={todo} 
            remove={() => {removeTodo(todo.id)}} 
            key={todo.id}
            toggle={() => {toggleTodo(todo.id)}} />
        })}
        <TodoForm addTodo={addTodo}/>
        </List>
      </Box>
    )
  }

