import { useState, useEffect } from "react";

function WelcomePage() {

    const [currentUser, setCurrentUser] = useState({});
    const [contentLoaded, setContentLoaded] = useState(false);

    useEffect(() => {
        fetch('/me')
            .then((r) => r.json())
            .then((user) => {
              // console.log(user.name)
              setCurrentUser(user)
              setContentLoaded(true)
            })
      }, [])

    return(
         <div id="about-me">
        <h3 id="welcome_message">Welcome, {`${currentUser.name}`}! lets get started on your dream garden</h3>
        <p>Username: {`${currentUser.username}`}</p>
        <p>Bio: {currentUser.bio}</p>
        {contentLoaded?<p>You have: {currentUser.gardens.length} gardens</p>: null}
        </div> 
    )
}

export default WelcomePage
