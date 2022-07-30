import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const Signup = (props) => {
  const host="http://localhost:5000"
  const [crendential, setcrendential] = useState({name:"",email:"",password:"",cpassword:""})
  const navigate=useNavigate()
  const onChange = (e)=>{
      setcrendential({...crendential, [e.target.name]: e.target.value})
  }

  const submithandle= async(e)=>{
      e.preventDefault();
      const response = await fetch(`${host}/api/auth/createuser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify({name:crendential.name, email:crendential.email,password:crendential.password})
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
          props.showAlert("Invalid details","danger")
         
        }
    
  }
  return (
    <div className="container">
    <form onSubmit={submithandle}>
      <div className=" form-group row">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control" id="name" name='name' onChange={onChange} value={crendential.name}/>
    </div>
  </div>
  <div className="form-group row my-2">
    <label htmlFor="=email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email"  className="form-control" id="email" name='email' onChange={onChange} value={crendential.email}/>
    </div>
  </div>
  <div className="form-group row my-2">
 
  <label class="col-sm-3 control-label">Password</label>
        <div class="col-sm-5">
            <input type="password" class="form-control" name="password"  onChange={onChange}
                data-bv-identical="true"
                data-bv-identical-field="confirmPassword"
                data-bv-identical-message="The password and its confirm are not the same" />
        </div>
        </div>
  <div className="form-group row my-2">

        <label class="col-sm-3 control-label">Retype password</label>
        <div class="col-sm-5">
            <input type="password"  class="form-control" value={crendential.cpassword} onChange={onChange} name="cpassword"
                data-bv-identical="true"
                data-bv-identical-field="password"
                data-bv-identical-message="The password and its confirm are not the same" />
        </div>
        </div>
  <button type="submit" className="btn btn-primary my-2 mx-2">Submit</button>
</form>
</div>
  )
}
