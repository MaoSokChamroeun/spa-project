import React from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home } from './pages/Home'
import 'flowbite';
import Contact from './pages/Contact';
import Location from './components/Location';
import SignatureTreatment from './components/spa-menu/SignatureTreatment';
import SpaPackages from './components/spa-menu/SpaPackages';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
     <div className="font-josefin">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/contact' element = {<Contact />} />
           <Route path='/location' element = {<Location />} />
           <Route path='/gallery' element = {<Gallery />} />
           {/* Spa Menu Routes */}
          <Route path="/packages/signature-treatment" element={<SignatureTreatment />} />
          <Route path='/packages/spa-packages' element = {<SpaPackages />} />
          
        </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
