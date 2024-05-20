import React from 'react'
// import './App.css'
import { Navbar } from './Components/Navbar'
import { MainSection } from './Pages/MainSection'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS once here
import ServiceSection from './Pages/ServiceSection';
import { ProductSection } from './Pages/ProductSection';
import { AboutSection } from './Pages/AboutSection';
import { ClientSection } from './Pages/ClientSection';
import ContactSection from './Pages/ContactSection';



const App = () => {
  return (
    <>    
      <Navbar />
      <MainSection />
      <ServiceSection />
      <ProductSection />
      <AboutSection />
      <ClientSection />
      <ContactSection />    
    </>
  )
}

export default App