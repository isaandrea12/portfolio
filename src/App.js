import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ContactIcons from "./components/ContactIcons/ContactIcons";
import emailjs from "emailjs-com";
import { Snackbar, Alert } from "@mui/material";

function App() {
  const [isNavToggle, setIsNavToggle] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

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
        "service_3sjwi0c",
        "template_flnwezt",
        e.target,
        "ARiMRnjE-EHyZ8JhW",
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpenSnackbar(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 5000);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Router>
      <div className="App">
        <AnimatedCursor
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            ".link",
          ]}
        />
        <Navbar isNavToggle={isNavToggle} setIsNavToggle={setIsNavToggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={<Projects isNavToggle={isNavToggle} />}
          />
          <Route
            path="/contact"
            element={<Contact isSubmit={isSubmit} sendEmail={sendEmail} />}
          />
        </Routes>
        <ContactIcons />
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
      </div>
    </Router>
  );
}

export default App;
