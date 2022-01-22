import {Link} from 'react-router-dom'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";






function Home ({setCurrentUser}) {
  let navigate = useNavigate()

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => { 
            console.log(res);
              if (res.ok) {
                setCurrentUser(null)
                console.log('you logged out');
                
              }
              
            })
            .then()
            .then(() => navigate("/"))
      }


    return (
        <>
        <img id="homepageImg" src="https://i.imgur.com/G24UGkO.png" />

        <div id="login-buttons-div">

          <button id="login_btn" onClick = { () => navigate("/login")}> Login </button>
          <button id="signup_btn" onClick = { () => navigate("/signup")}> Signup </button>
          <button id="logout_btn" onClick = {handleLogout}> Logout </button>

          
          

        
        </div>
        </>

    )
}

export default Home