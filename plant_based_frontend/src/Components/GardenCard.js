import { Card } from "react-bootstrap"
import React, { useState } from "react";
import EditGardenForm from "./EditGardenForm";


function GardenCard({garden, onDeleteGarden}) {
    const { id} = garden;
    const [currentGarden, setCurrentGarden] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        user_id:""
    })

//    Delete functionality
    function handleDeleteGarden() {
        fetch(`/gardens/${id}`, {
          method: "DELETE",
        }).then((res) => {
            console.log(res)
          if (res.ok) {
            onDeleteGarden(garden);
          }
        });
      }

 // Update Functionality


    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2017%2F07%2Fmcclurg_garden_gravel_path_2481501_mcclu20160414-_41a3348-1.jpg&q=85"/>
                <Card.Title> {garden.name}</Card.Title>
                <Card.Subtitle>{garden.location}</Card.Subtitle>
                <button class ="redirect_btn"
                >View</button>
                <button class ="redirect_btn">Edit</button>
                <button onClick={handleDeleteGarden} class ="redirect_btn">Delete</button>
                <EditGardenForm garden={garden} id={id}/> // make this conditionally rendered based on whether or not you click the view button
            </Card.Body>
        </Card>
        </>
    )
}

export default GardenCard