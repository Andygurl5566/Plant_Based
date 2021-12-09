import { Card } from "react-bootstrap"

function PlantDetail({plant}) {
    return (
        <Card style={{ width: '40rem' }}>
            <Card.Body>
                <Card.Img src={plant.image}/>
                <Card.Title> {plant.name}</Card.Title>
                <Card.Subtitle>{plant.plant_type}</Card.Subtitle>
                <Card.Subtitle>{plant.species}</Card.Subtitle>
                <Card.Text>Care insructions: {plant.care_instructions}</Card.Text>
                <Card.Text>Notes: {plant.notes}</Card.Text>
            </Card.Body>
        </Card>
    )

}

export default PlantDetail