import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./styles.css"

export default function App() {
  const [formData, setFormData] = useState({name: "", email:"", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then(
      () => alert("Message sent successfully")
    ).catch(
      () => alert("Failed to send message.")
    );
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <h1>Hello, I'm Ayodele Kadiri</h1>
        <motion.p
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1.5 }}
        >
          Full-Stack Developer | React | Node.js | Django
        </motion.p>
      </motion.section>
    </div>
  )
}
