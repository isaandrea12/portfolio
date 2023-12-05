import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ sendEmail }) => {
  const [formData, setFormData] = useState({
    contact_number: "",
    user_name: "",
    user_email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log("Form submitted:", formData);
  //   // Reset the form after submission
  //   setFormData({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  return (
    <div className={styles.container}>
      <form onSubmit={sendEmail}>
        <div>
          <input
            placeholder="Name"
            type="text"
            id="contact_number"
            name="contact_number"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            placeholder="Your Email"
            type="email"
            id="user_name"
            name="user_name"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            style={{ resize: "none" }}
            id="user_email"
            name="user_email"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
