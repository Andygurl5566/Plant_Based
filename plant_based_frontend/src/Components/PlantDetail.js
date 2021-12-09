import { Card } from "react-bootstrap"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {Link} from 'react-router-dom'

function PlantDetail() {

    const [plant, setPlant] = useState([])
    const {plant_id} = useParams()

    useEffect(() => {
        console.log(plant_id);
        fetch(`/plants/${plant_id}`)
            .then((r) => r.json())
            .then((plant) => {
                // console.log(users)
                setPlant(plant)                
            })
    }, [])


    return (
        <Card style={{ width: '40rem' }}>
            <Card.Body>
                <Card.Img src={plant.image}/>
                <Card.Title> {plant.name}</Card.Title>
                <Card.Subtitle>{plant.plant_type}</Card.Subtitle>
                <Card.Subtitle>{plant.species}</Card.Subtitle>
                <Card.Text>Care insructions: {plant.care_instructions}</Card.Text>
                <Card.Text>Notes: {plant.notes}</Card.Text>
                <button
                class= "redirect_btn"> <Link class="redirect" to={`/gardens/${plant.garden_id}`}> Close </Link></button> 

            </Card.Body>
        </Card>
    )

}

export default PlantDetail