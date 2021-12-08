import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import GardenCard from "./GardenCard"

function Gardens () {

    const [GardenList, setGardens] = useState([])

    useEffect(() => {
        fetch('/gardens')
            .then((r) => r.json())
            .then((gardens) => {
                // console.log(Gardens)
                setGardens(gardens)
            })
    }, [])

    function handleDeleteGarden(deletedGarden) {
        setGardens((gardens) =>
          gardens.filter((garden) => garden.id !== deletedGarden.id)
        );
      }



    return ( 
        <>

        <h1>your gardens</h1>
        <button class= "redirect_btn"> <Link class="redirect" to="/garden_form"> Create Garden </Link></button>
        <div id="gardenCardsDiv">
        {GardenList.map((garden) => {
            return (
                <div id="GardenCardsDiv">
                    <GardenCard 
                    garden={garden}
                    onDeleteGarden={handleDeleteGarden}
                    />
                </div>
            )})
            }
        
        </div>
        </>
    )
}

export default Gardens