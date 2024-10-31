import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material"
import Create from "@mui/icons-material/Create";
import { useState } from "react"

export default function TodoForm({addTodo}){

    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    } 

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem >
            <form onSubmit={handleSubmit} action="" >
                <TextField 
                    onChange={handleChange} 
                    value={text} id="outlined-basic" 
                    label="Add Todo" 
                    variant="outlined"
                    InputProps = {
                        {
                            endAdornment: 
                                <InputAdornment position="end">
                                <IconButton
                                type="submit"
                                aria-label="create todo"  
                                edge="end"
                        >
                                    <Create />
                                </IconButton>
                                </InputAdornment>
                        }
                    }
                />
            </form>
        </ListItem>
    )
}