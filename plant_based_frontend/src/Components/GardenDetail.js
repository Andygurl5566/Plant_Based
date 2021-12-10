import PlantCard from "./PlantCard"
import {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"

function GardenDetail(){
    const [edited, setEdited] = useState(true)
    const [plantList, setPlants] = useState([])
    const {garden_id} = useParams()

    useEffect(() => {
        console.log(garden_id);
        fetch(`/gardens/${garden_id}`)
            .then((r) => r.json())
            .then((garden) => {
                // console.log(users)
                setPlants(garden.plants)                
            })
    }, [edited])

    return(
        <> 
        <h1>your plants</h1>
        <button class= "redirect_btn"> <Link class="redirect" to="/plant_form"> Add Plant </Link></button>
        <button class= "redirect_btn"> <Link class="redirect" to="/gardens"> Back </Link></button>

        <div id="plantCardsDiv">
        {console.log(plantList)}
        {plantList.map((plant) => {
            return (
                <div  >
                    <PlantCard edited={edited} setEdited={setEdited} plant={plant}/>
                </div>
            )})
            }
        </div>
        </>

    )
}

export default GardenDetail