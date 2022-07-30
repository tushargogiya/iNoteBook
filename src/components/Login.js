import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
export const Login = (props) => {
    const [crendential, setcrendential] = useState({email:"",password:""})
    const navigate=useNavigate()
    const onChange = (e)=>{
        setcrendential({...crendential, [e.target.name]: e.target.value})
    }

    const submithandle= async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify({email:crendential.email,password:crendential.password})
          });
          const json=await response.json();
          console.log(json);
          if(json.success)
          {
            localStorage.setItem('token',json.authtoken)
            props.showAlert("Log in successfully","success")
            navigate('/');
           

          }
          else{
            props.showAlert("Wrong Crendentials","danger")

          }
      
    }
  return (
    <form onSubmit={submithandle}>
      <h3 className='mt-2'>Login to continue with INoteBook</h3>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' placeholder="Enter email" value={crendential.email} onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="Password">Password</label>
    <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={onChange}  value={crendential.password}/>
  </div>
 
  <button type="submit" className="btn btn-primary my-1">Login in</button>
</form>
  )
}
