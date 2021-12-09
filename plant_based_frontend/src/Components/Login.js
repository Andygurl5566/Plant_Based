import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login= ({setCurrentUser}) => {
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res)
      if (res.ok) {
        res.json().then((user) => {
         
          setCurrentUser(user); 
          console.log(user.id)
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  
  }

    return ( 
<>
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} class="form-control"  placeholder="Enter Email"/>
      
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-check">
      
      </div>
      <button class="btn btn-primary" type="submit"><Link class="redirect2"to="/gardens">Submit</Link></button>
      <Link class="btn btn-primary" to="/"> Back</Link> 
    </form>
</>
)}
export default Login