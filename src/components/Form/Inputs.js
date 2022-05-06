
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import { db } from '../../firebase'
import { uid } from "uid"
import { set, ref  } from 'firebase/database'
import { useState , useEffect } from 'react';
 
export function Inputs() {   

  const [ todo , setTodo ] = useState("")

  const lidandoComMudançadoTodo = (e) => {
    setTodo(e.target.value);
  };
    
    //write 
    const writeToDataBase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
    todo,
    uuid,
   })
   setTodo('')
  }

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
      
    </Box>

    );
}
