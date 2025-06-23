import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SalesWebsite from './SalesWebSite';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; 


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<SalesWebsite/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/Footer" element={<Footer/>} />
           </Routes>
        </Router>
    );
}

export default App;
