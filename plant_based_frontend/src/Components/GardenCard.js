import { Card } from "react-bootstrap"
import React, { useState } from "react";
import EditGardenForm from "./EditGardenForm";
import GardenDetail from "./GardenDetail";
import { Container } from "react-bootstrap";
import { Link, Route, Routes } from 'react-router-dom'


function GardenCard({garden, onDeleteGarden}) {
    const { id} = garden;
    const [toggle, setToggle] = useState(false);
    const [currentGarden, setCurrentGarden] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        user_id:""
    })

//toggle functionality

function handleToggle(){
    
    setToggle(!toggle)
    console.log(toggle)
}

//    Delete functionality

    function confirmDelete(){
        let result = window.confirm("delete this garden?")
        if (result) {
            handleDeleteGarden()
        }
    }

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

                <button
                class= "redirect_btn"> <Link class="redirect" to={`/gardens/${id}`}> View </Link></button> 

                {/* The above link should only show plants for that particular garden */}

                <button onClick={handleToggle} class ="redirect_btn"> {toggle==false? "Edit":"Close"} </button>
                <button onClick={confirmDelete} class ="redirect_btn">Delete</button>
                {toggle == false? "" : <EditGardenForm garden={garden} id={id}/> }
                {/* // above link should be conditionally rendered based on whether or not you click the view button */}
                
            </Card.Body>
        </Card>
        </>
    )
}

export default GardenCard