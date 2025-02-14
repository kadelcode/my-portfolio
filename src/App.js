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
  }
  return (
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 4}}>
      <h1>Welcome to My Portfolio</h1>
    </motion.div>
  )
}
