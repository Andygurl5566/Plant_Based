function WelcomePage({currentUser}) {
    return(
        <div id="about-me">
        <h3 id="welcome_message">Welcome, {`${currentUser.name}`}! lets get started on your dream garden</h3>
        <p>Username: {`${currentUser.username}`}</p>
        <p>Bio: {`${currentUser.bio}`}</p>
        {/* <p>You have: {`${currentUser.gardens.length}`} gardens</p> */}
        </div>
    )
}

export default WelcomePage
