import {Link} from 'react-router-dom'
import React, { useState } from "react";





function Home ({setCurrentUser}) {

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => { 
            console.log(res);
              if (res.ok) {
                setCurrentUser(null)
                console.log('you logged out');
              }
            })
      }


    return (
        <>
        <div id="home-header">
        <h1>HOME</h1>
        <p>welcome to plant based , the premiere garden management app</p>
        </div>
        <img id="homepageImg" src="https://media.istockphoto.com/vectors/gardening-tools-and-plants-in-the-garden-vector-id1268196717?k=20&m=1268196717&s=612x612&w=0&h=RBA2SisPRx6OIeouAQ2R7I78eiazDS2gvGPr17mHvy4=" />
        <div id="login-buttons-div">
          <button id="login_btn" > <Link class="redirect" to="/login"> Login </Link></button>
          <button id="signup_btn"> <Link class="redirect" to="/signup"> Signup </Link></button>
          <button id="logout_btn" onClick={handleLogout}> <Link class="redirect" to="/login"> Logout </Link></button>
        </div>
        </>

    )
}

export default Home