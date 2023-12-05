import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ContactIcons from "./components/ContactIcons/ContactIcons";
import emailjs from 'emailjs-com';


function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
      // Add your form submission logic here
      console.log("Form submitted:", formData);
      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    emailjs
      .sendForm(
        'service_3sjwi0c',
        'template_flnwezt',
        e.target,
        'ARiMRnjE-EHyZ8JhW'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 5000);
  };
  
  return (
    <Router>
      <div className="App">
        <AnimatedCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact isSubmit={isSubmit} sendEmail={sendEmail} />} />
        </Routes>
        <ContactIcons />
      </div>
    </Router>
  );
}

export default App;