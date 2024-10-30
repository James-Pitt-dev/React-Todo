import { useState } from 'react';
import TodoItem from './TodoItem';
import List from '@mui/material/List';
import TodoForm from './TodoForm';


const initialTodos = [
    {id: '1', text:'Walk the dog', completed: false},
    {id: '2', text:'Walk the dog', completed: true},
    {id: '3', text:'Walk the dog', completed: false},
    {id: '4', text:'Walk the dog', completed: true}
  ]

  export default function TodoList(){

    const [todos, setTodos] = useState(initialTodos);
    
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

    return (
        <List  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
            return <TodoItem todo={todo} 
            remove={() => {removeTodo(todo.id)}} 
            key={todo.id}
            toggle={() => {toggleTodo(todo.id)}} />
        })}
        <TodoForm />
        </List>
    )
  }

