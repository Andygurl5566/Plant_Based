import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  

    let navigate = useNavigate()
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
        <h3 id="welcome_message">Welcome, {`${currentUser.name}`}<h3>
          </h3> Lets get started on your dream garden!</h3>

        <div id="bio_div">
      <img id="userlogo" src="https://media2.giphy.com/media/3oEjHOUcNRKgpqTHiM/giphy.gif" />
   
        <h5>Username: {`${currentUser.username}`}</h5>
        <h5>Bio: {currentUser.bio}</h5>
        {contentLoaded ? <h5>You have: {currentUser.gardens.length} gardens</h5>: null}
        
        </div>
        <button class="entrancebtn2" onClick={ ()=>{navigate("/gardens")}}> View Gardens</button>
        {/* <button class="entrancebtn"> Plants</button> */}
        </div> 
    )
}

export default WelcomePage
