import { Form } from "react-bootstrap"
import {Link, useNavigate} from 'react-router-dom'
import React, { useState } from "react";

const GardenForm=({currentUser, garden})=>{
    let navigate = useNavigate()
 console.log(garden)

    const [currentGarden, setCurrentGarden] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        

    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/gardens", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
            console.log(res)
            if (res.ok) {
              res.json().then((garden) => {
                setCurrentGarden(garden);
              })
              .then(() => navigate("/gardens"))
            } else {
              res.json().then((errors) => {
                console.error(errors);
              });
            }
          });
        
        }

    
    
    return(
        <>
         <form onSubmit={handleSubmit}>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="name" value={formData.name}  onChange={handleChange} id="name" />
    </div>

    <div class="form-group">
        <label for="plant_type">Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} class="form-control" id="location" />
    </div>

    <div class="form-check">
    
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
   <Link class="btn btn-primary" to="/gardens"> Back</Link>
   

 </form>   
        
        </>
    )

}

export default GardenForm