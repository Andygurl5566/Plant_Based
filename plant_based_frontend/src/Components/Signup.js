import React, { useState } from "react";
import { Link } from "react-router-dom";


//LOGIN FUNCTIONALITY

const Signup= () => {
  
  const [currentUser, setCurrentUser] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

//JSX BEGINGS HERE

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

      <div class="form-group">
        <label for="exampleInputPassword1">Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-check">
      
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <Link class="btn btn-primary" to="/"> Back</Link> 
    </form>
</>
)


}


export default Signup