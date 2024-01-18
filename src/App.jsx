import NavbarApp from "./components/NavbarApp";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Reservation from "./pages/Reservation";
import Order from "./pages/Order";

export function Root(){
  return (
    <>
      <NavbarApp/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/reservation" element={<Reservation/>}/>
            <Route path="/order" element={<Order/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
    </>
  )
}

export default App
