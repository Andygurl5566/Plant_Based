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
            .then(() => navigate("/"))
      }


    return (
        <>
        <div id="home-header">
        {/* <h1>HOME</h1> */}
        
        {/* <p>Welcome to plant based , the premiere garden management app</p> */}
        </div>
        
        <img id="homepageImg" src="https://i.imgur.com/G24UGkO.png" />
        {/*James pick  <img id="homepageImg" src="https://media2.giphy.com/media/3oEjHOUcNRKgpqTHiM/giphy.gif" /> */}

        <div id="login-buttons-div">

          <button id="login_btn" > <Link class="redirect" to="/login"> Login </Link></button>
          <button id="signup_btn"> <Link class="redirect" to="/signup"> Signup </Link></button>
          <button id="logout_btn" onClick={handleLogout}> Logout </button>

          
          

        
        </div>
        </>

    )
}

export default Home