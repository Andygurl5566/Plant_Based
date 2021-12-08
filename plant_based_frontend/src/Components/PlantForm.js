import { Form } from "react-bootstrap"
import {Link} from 'react-router-dom'
import React, { useState } from "react";


const PlantForm=()=> {
    const [currentPlant, setCurrentPlant] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        plant_type: "",
        plant_species: "",
        image: "",
        care_instructions: "",
        notes: "",
        garden_id:""
      

    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/plants", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
            if (res.ok) {
              res.json().then((plant) => {
                setCurrentPlant(plant);
              });
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
        <label for="name">Plant Name</label>
        <input type="text" class="form-control" name="name" value={formData.name} onChange={handleChange} />
    </div>

    <div class="form-group">
        <label for="plant_type">Plant Type</label>
        <input type="text" name="plant_type" value={formData.plant_type} onChange={handleChange} class="form-control" id="type" />
    </div>

    <div class="form-group">
        <label for="species">Species</label>
        <input type="text" name="plant_species" value={formData.plant_species} onChange={handleChange} class="form-control" id="species" />
    </div>

    <div class="form-group">
        <label for="name">Care Instructions </label>
        <input type="text" name="care_instructions" value={formData.care_instructions} onChange={handleChange} class="form-control" id="instructions" />
    </div>

    <div class="form-group">
        <label for="name">Notes </label>
        <input type="text" name = "notes" class="form-control" value={formData.notes} onChange={handleChange} id="notes" placeholder="Notes"/>
    </div>

    <div class="form-group">
        <label for="name">Garden ID</label>
        <input type="text" name = "garden_id" class="form-control" value={formData.garden_id} onChange={handleChange} id="notes" placeholder="Enter an Integer"/>
    </div>

    <Form.Group controlId="formFile" className="mb-3">     
    <div class="form-group">
        <label for="name">Image </label>
        <input type="file" name="image" value={formData.image} onChange={handleChange} class="form-control" id="image" />
    </div>
    </Form.Group>
    
    <>
    <Form.Label>Neccessary Sunlight</Form.Label>
    <Form.Range />
    </>

    <div class="form-check">
    
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
    <Link class="btn btn-primary" to="/plants"> Back</Link> 
    
 </form>   
        
</>
    )

}

export default PlantForm