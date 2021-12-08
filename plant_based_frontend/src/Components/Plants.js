import {useEffect, useState} from "react"
import PlantCard from "./PlantCard"
import {Link} from 'react-router-dom'

function Plants () {

    const [plantList, setPlants] = useState([])

    useEffect(() => {
        fetch('/plants')
            .then((r) => r.json())
            .then((plants) => {
                // console.log(users)
                setPlants(plants)
            })
    }, [])



    return ( 

        <> 
        <h1>your plants</h1>

        <button class= "redirect_btn"> <Link class="redirect" to="/plant_form"> Add Plant </Link></button>
        <button class= "redirect_btn"> <Link class="redirect" to="/gardens"> Back </Link></button>

        <div id="plantCardsDiv">
       
        {plantList.map((plant) => {
            return (
                <div    >
                    <PlantCard plant={plant}/>
                </div>
            )})
            }
        
        </div>
        </>
    )
}

export default Plants