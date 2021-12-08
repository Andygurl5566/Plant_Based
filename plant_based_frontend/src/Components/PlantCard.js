import { Card } from "react-bootstrap"
import React, { useState } from "react";

function PlantCard({plant, onDeletePlants}) {
    const {id} = plant
    const [toggle, setToggle] = useState(false);
    const [currentPlant, setCurrentPlant] = useState({});
    const [formData, setFormData] = useState({
       

       name: "replace with plant end points"
    })

//toggle functionality

function handleToggle(){
    
    setToggle(!toggle)
    console.log(toggle)
}

//    Delete functionality
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
                <button class ="redirect_btn">Edit</button>
                <button onClick={handleDeletePlants} class ="redirect_btn">Delete</button>
            </Card.Body>
        {console.log(plant)}
        </Card>
        </>
    )
}

export default PlantCard