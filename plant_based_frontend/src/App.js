// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet, Link, Route, Routes } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';
import Home from './Components/Home';
import Login from './Components/Login';
import Gardens from './Components/Gardens';
import GardenForm from './Components/GardenForm';


function App() {
  return (
    <>
      <Navbar>
          <Container>
            <h1> plant-based 🌱 </h1> 
            <Link to="/"> home </Link>
            <Link to="/gardens"> gardens </Link>
            <Link to="/plants"> plants </Link>

          </Container>
      </Navbar>
      <Outlet/>

      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gardens" element={<Gardens/>}/>
          {/* <Route path="/plants" element={<Plants/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path = "/garden_form" element={<GardenForm/>}/>
          {/* <Route path = "/plant_form" element={<PlantForm/>}/> */}
          {/* <Route path = "/signup" element={<Signup/>}/> */}



        </Routes>
      </Container>

    </>
  );
}

export default App;
