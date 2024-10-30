import { ListItem, TextField } from "@mui/material"
import { useState } from "react"

export default function TodoForm(){

    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    } 
    return (
        <ListItem >
        <TextField onChange={handleChange} value={text} id="outlined-basic" label="Outlined" variant="outlined" />
        </ListItem>
    )
}