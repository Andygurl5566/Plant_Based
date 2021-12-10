import { Card } from "react-bootstrap"
import React, { useState } from "react";
import EditPlantForm from "./EditPlantForm";
import PlantDetail from "./PlantDetail"
import { Link } from "react-router-dom";

function PlantCard({plant, onDeletePlants, edited, setEdited}) {
    const {id} = plant
    console.log(plant)
    const [toggle, setToggle] = useState(false);
    const [currentPlant, setCurrentPlant] = useState({});
    const [formData, setFormData] = useState({
       
        name: "name",
        plant_type: "plant_type",
        plant_species: "plant_species",
        image: "image",
        care_instructions: "care_instructions",
        notes: "notes",
        garden_id: `${plant.garden_id}`
    })

//toggle functionality

function handleToggle(){
    
    setToggle(!toggle)
    console.log(toggle)
}

//    Delete functionality
function confirmDelete(){
  let result = window.confirm("delete this plant?")
  if (result) {
      handleDeletePlants()
  }
}
function handleDeletePlants() {
    fetch(`/plants/${id}`, {
      method: "DELETE",
    }).then((res) => {
        console.log(res)
      if (res.ok) {
        onDeletePlants(plant);
      }
    });
  }

    return (
        <>
        
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img src={plant.image} />
                <Card.Title> {plant.name}</Card.Title>
                <Card.Subtitle>{plant.plant_type}</Card.Subtitle>
                <Card.Text>{plant.notes}</Card.Text>
                <button
                class= "redirect_btn"> <Link class="redirect" to={`/plants/${id}`}> View </Link></button> 
                <button onClick={handleToggle}class ="redirect_btn">{toggle==false? "Edit":"Close"}</button>
                <button onClick={confirmDelete} class ="redirect_btn">Delete</button>
                {toggle == false? "" : <EditPlantForm 
                edited={edited}
                setEdited={setEdited}
                plant={plant} 
                id={id}/> }
               {/* <button> {toggle==false? "Edit":"Close"}</button> */}

            </Card.Body>
        {console.log(plant)}
        </Card>
        </>
    )
}

export default PlantCard