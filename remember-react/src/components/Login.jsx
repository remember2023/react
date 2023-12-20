import React, { useState } from "react";
import Button from '@mui/material/Button';
import { FormControl, TextField } from "@mui/material";
import { setCookie } from "../services/cookies";
// import TextField from "@mui/material";


const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const login = (event) => {
      console.log(email, password);
      event.preventDefault();
      setCookie("details", [email, password], 7);
      alert("שלום לך!!")
   }
   return <>
      <h1>Login</h1>
      <h5>ניתן להזין שם משתמש וסיסמה</h5>
      <FormControl >
         <TextField
            dir="rtl"
            required
            id="outlined-required"
            label="אימייל"
            onChange={e => setEmail(e.target.value)}
         />
      </FormControl>
      <br />
      <TextField
         dir="rtl"
         required
         id="outlined-required"
         label="סיסמה"
         onChange={e => setPassword(e.target.value)}
      />
      <br />
      <Button onClick={login}>אישור</Button>


   </>
}
export default Login