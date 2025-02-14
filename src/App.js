import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./styles.css"

export default function App() {
  const [formData, setFormData] = useState({name: "", email:"", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 4}}>
      <h1>Welcome to My Portfolio</h1>
    </motion.div>
  )
}
