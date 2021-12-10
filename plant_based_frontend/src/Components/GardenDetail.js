import PlantCard from "./PlantCard"
import {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import PlantForm from "./PlantForm"


function GardenDetail(){
    const [edited, setEdited] = useState(true)
    const [plantList, setPlants] = useState([])
    const {garden_id} = useParams()
    const [toggle, setToggle] = useState(false);

    function handleToggle(){
    
        setToggle(!toggle)
        console.log(toggle)
    }

    function onDeletePlants(deletedPlants) {
        setPlants((plants) =>
          plants.filter((plants) => plants.id !== deletedPlants.id)
        );
      }

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
        <button onClick = {handleToggle} class= "redirect_btn">  Add Plant </button>
        <button class= "redirect_btn"> <Link class="redirect" to="/gardens"> Back </Link></button>

        {toggle == true? <PlantForm toggle={toggle} setToggle={setToggle} edited={edited} setEdited={setEdited}/> : ""}

        <div id="plantCardsDiv">
        {console.log(plantList)}
        {plantList.map((plant) => {
            return (
                <div  >
                    <PlantCard edited={edited} setEdited={setEdited} plant={plant} onDeletePlants={onDeletePlants}/>
                </div>
            )})
            }
        </div>
        </>

    )
}

export default GardenDetail