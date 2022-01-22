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
                console.log(plants)
                
            })
    }, [])

    function handleDeletePlants(deletedPlants) {
        setPlants((plants) =>
          plants.filter((plants) => plants.id !== deletedPlants.id)
        );
      }



    return ( 

        <> 
        <h1>your plants</h1>

        <button class= "redirect_btn"> <Link class="redirect" to="/plant_form"> Add Plant </Link></button>
        <button class= "redirect_btn"> <Link class="redirect" to="/gardens"> Back </Link></button>

        <div id="plantCardsDiv">
        {console.log(plantList)}
        {plantList.map((plant) => {
            return (
                <div>
                    
                    <PlantCard plant={plant}
                    onDeletePlants={handleDeletePlants}/>
                </div>
            )})
            }
        
        </div>
        </>
    )
}

export default Plants