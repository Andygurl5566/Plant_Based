// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GardenDetail from "./Components/GardenDetail";
import { Outlet, Link, Route, Routes } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';
import Home from './Components/Home';
import Login from './Components/Login';
import Gardens from './Components/Gardens';
import GardenForm from './Components/GardenForm';
import Plants from './Components/Plants';
import PlantForm from './Components/PlantForm';
import EditGardenForm from './Components/EditGardenForm';
import React, { useState } from "react";



function App() {

  const [currentUser, setCurrentUser] = useState({});



  return (
    <div id="body">
      <Navbar>
          <Container id="nav_bar">
            <h1> plant-based 🌱 </h1> 
            <Link class="nav_bar_buttons" to="/"> home </Link>
            <Link class="nav_bar_buttons" to="/gardens"> my gardens </Link>
            <Link class="nav_bar_buttons" to="/plants"> my plants </Link>
            

          </Container>
      </Navbar>
      <Outlet/>

      <Container>
        <Routes>
          <Route path="/" element={<Home 
          setCurrentUser={setCurrentUser}
          />}/>
          <Route path="/gardens" element={<Gardens/>}/>
          <Route path="/plants" element={<Plants/>}/>
          <Route path="/login" element={<Login 
          setCurrentUser={setCurrentUser}
          />}/>
          <Route path = "/garden_form" element={<GardenForm/>}/>
          <Route path = "/plant_form" element={<PlantForm/>}/> 
          <Route path = "/edit_garden_form" element={<EditGardenForm/>}/>
          <Route path = "/gardens/:garden_id" element={<GardenDetail />}/>
        
         {/* <Route path = "/signup" element={<Signup/>}/> */}




        </Routes>
      </Container>

    </div>
  );
}

export default App;
