import React from 'react'
import {useState} from "react";
import '../style.css'
const form = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");    
    const [confirmPassword,setConfirmPassword] = useState("");
    const[nameerror,setNameError] = useState("");
    const [emailerror,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [confirmPasswordError,setConfirmPasswordError] = useState("");
    const [nameerrorColor,setNameErrorColor] = useState("");
    const [emailerrorcolor,setEmailErrorColor] = useState("");
    const [passwordErrorColor,setPasswordErrorColor] = useState("");
    const [confirmPasswordErrorColor,setConfirmPasswordErrorColor] = useState("");  
  const handleSubmit = (e) => {
    e.preventDefault();
if(name==="" || name.length<3){
    setNameError("Name must be at least 3 characters long");
    setNameErrorColor("red");
  }
  else{
    setNameError("");
    setNameErrorColor("green");
  }
  if(password==="password" || password.length<8){
    setPasswordError("Password must be at least 8 characters long and not 'password'");
    setPasswordErrorColor("red");
} else{
    setPasswordError("");
    setPasswordErrorColor("green");
  }
  if(email==="" || !email.includes("@")){
    setEmailError("Please enter a valid email address");
    setEmailErrorColor("red");
  } else{
    setEmailError("");
    setEmailErrorColor("green");
  }
  if(password!==confirmPassword){
    setConfirmPasswordError("Passwords do not match");
    setConfirmPasswordErrorColor("red");
  } else{
    setConfirmPasswordError("");
    setConfirmPasswordErrorColor("green");
  }
}
    return (
    <div>
    <form>
    <input type="text" placeholder="Name" value={name} style={{borderColor:nameerrorColor}} onChange={(e)=>setName(e.target.value)} />
    <p>{nameerror}</p>
     <input type="email" placeholder="Email" value={email} style={{borderColor:emailerrorcolor}} onChange={(e)=>setEmail(e.target.value)} />
    <p>{emailerror}</p>
     <input type="text" placeholder="Password" value={password} style={{borderColor:passwordErrorColor}} onChange={(e)=>setPassword(e.target.value)} />
    <p>{passwordError}</p>
     <input type="text" placeholder="Confirm Password" value={confirmPassword} style={{borderColor:confirmPasswordErrorColor}} onChange={(e)=>setConfirmPassword(e.target.value)} />
    <p>{confirmPasswordError}</p>
    <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default form
