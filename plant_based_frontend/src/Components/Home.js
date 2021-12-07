import {Link} from 'react-router-dom'

function Home () {
    return (
        <>
        <h1>HOME</h1>
        <p>welcome to plant based , the premiere garden management app</p>

        <button > <Link class="redirect" to="/login"> Login </Link></button>
        <button > <Link class="redirect" to="/signup"> Signup </Link></button>
        
        </>

    )
}

export default Home