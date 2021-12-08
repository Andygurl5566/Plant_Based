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
        <h1>HOME</h1>
        <p>welcome to plant based , the premiere garden management app</p>

        <button > <Link class="redirect" to="/login"> Login </Link></button>
        <button > <Link class="redirect" to="/signup"> Signup </Link></button>
        <button onClick={handleLogout}> <Link class="redirect" to="/logout"> Logout </Link></button>
        
        </>

    )
}

export default Home