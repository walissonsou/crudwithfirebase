
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './style.css'; 
import Button from '@mui/material/Button';
import { db } from '../../firebase'
import { uid } from "uid"
import { set, ref, onValue , remove } from 'firebase/database'
import { useState , useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint'

import DeleteIcon from '@mui/icons-material/Delete';



 
export function Inputs() {   

  const [ todo , setTodo ] = useState("")
  const [ items , setItems] = useState([])

  const lidandoComMudançadoTodo = (e) => {
    setTodo(e.target.value);
  };
    //read
    useEffect (() => {
      onValue(ref(db), snapshot => {
        setItems([])
        const data = snapshot.val()
        if(data !== null) {
          Object.values(data).map(todo => {
            
            setItems(oldItems => [...oldItems, todo])
          })
        }
      });

    }, [])
    
    //write 
    const writeToDataBase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
    todo,
    uuid,
   })
   setTodo('')
  }
  const lidandoDeletando = (todo) => {
    remove(ref(db, `/${todo.uuid}`));

  };

        return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" value={todo} onChange={lidandoComMudançadoTodo}/>
      
      <Button  variant="contained" onClick={writeToDataBase}> Send</Button>
      {items.map(todo => (
         <div className="lista">
         <ul>
            <li>
            {todo.todo}
            <IconButton aria-label="delete" size="large"
             onClick={() => lidandoDeletando(todo)}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success" >
              <Fingerprint />
            </IconButton>            
            </li>           
          </ul>
         
          
         </div>
      ))}
      
    </Box>

    );
}
