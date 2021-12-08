import { Card } from "react-bootstrap"

function PlantCard({plant}) {
    return (
        <>
        
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img src={plant.image} />
                <Card.Title> {plant.name}</Card.Title>
                <Card.Subtitle>{plant.plant_type}</Card.Subtitle>
                <Card.Text>{plant.notes}</Card.Text>
                <button class ="redirect_btn">Edit</button>
                <button class ="redirect_btn">Delete</button>
            </Card.Body>
        {console.log(plant)}
        </Card>
        </>
    )
}

export default PlantCard