import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import GardenCard from "./GardenCard"


function Gardens({}) {
    const [edited, setEdited] = useState(true)
    const [GardenList, setGardens] = useState([])
 

    useEffect(() => {
        fetch('/gardens')
            .then((r) => r.json())
            .then((gardens) => {
                // console.log(Gardens)
                setGardens(gardens)
                console.log(gardens)
            })
    }, [edited])

    // edited inside the empty array at the end of useEffect makes the useEffect listen to any changes in GardenList. Whenever GardenList changes, useEffect runs again and rerenders the gardens.

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
                    setEdited={setEdited} edited={edited}
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