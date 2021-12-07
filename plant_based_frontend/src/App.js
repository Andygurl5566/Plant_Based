// import logo from './logo.svg';
import './App.css';
import { Outlet, Link, Route, Routes } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';

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
          {/* <Route path="/gardens" element={<Gardens/>}/> */}
          {/* <Route path="/plants" element={<Plants/>}/> */}
          <Route path="/login" element={<Login/>}/>
          {/* <Route path = "/garden_form" element={<GardenForm/>}/> */}
          {/* <Route path = "/plant_form" element={<PlantForm/>}/> */}
          {/* <Route path = "/signup" element={<Signup/>}/> */}



        </Routes>
      </Container>

    </>
  );
}

export default App;
