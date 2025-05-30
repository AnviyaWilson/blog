import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const AddBlog = () => {
  var [input,setInput]= useState({});
  const inputHandler =(e)=>{
    setInput({...input,[e.target.name]: e.target.value})
    console.log(input);
  }
    const submitHandler=()=>{
      console.log("button clicked")
    
  }
  return (
    <div>
      <Typography variant='h3'>WELCOME TO BLOG PAGE</Typography>
      <TextField variant='standard' label="Blog Name" onChange={inputHandler} name="Blog Name"/><br />
      <TextField variant='standard' label="Description" onChange={inputHandler} name="Description"/><br />
      <TextField variant='standard' label="Author Name " onChange={inputHandler} name="Author Name"/><br />
      <Button variant="contained" onClick={submitHandler}>Submit</Button>
      </div>
  )
}

export default AddBlog
