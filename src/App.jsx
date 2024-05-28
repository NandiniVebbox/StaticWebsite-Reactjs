import React from 'react'
// import './App.css'
import { Navbar_C } from './Components/Navbar_C'
import { MainSection } from './Pages/MainSection'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS once here
import ServiceSection from './Pages/ServiceSection';
import { ProductSection } from './Pages/ProductSection';
import { AboutSection } from './Pages/AboutSection';
import { ClientSection } from './Pages/ClientSection';
import ContactSection from './Pages/ContactSection';
import Footer from './Pages/Footer';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';



const App = () => {
  return (
    <>    
  
     <Navbar_C />
     <Container >
      <MainSection />
      <ServiceSection />
      <ProductSection />
      <AboutSection />
      <ClientSection />
      <ContactSection />    
      </Container>
      <Footer />
      
    </>
  )
}

export default App