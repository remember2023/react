import React, { useState } from "react";
import Button from '@mui/material/Button';
import { FormControl, TextField } from "@mui/material";

const Search= ()=>{
    const[objectForSearcg, setObjectForSearch]=useState('')

    return<>
    <h1>wellcom to search</h1>
    <FormControl >
         <TextField
            dir="rtl"
            required
            id="outlined-required"
            label="קיר הנצחה או שם"
            onChange={e => setObjectForSearch(e.target.value)}
         />
      </FormControl> 
      <Button></Button>
    </>
}
export default Search