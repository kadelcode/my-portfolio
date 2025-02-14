import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaJava, FaAws, FaDatabase } from "react-icons/fa"
import "./styles.css"
import { FaC } from "react-icons/fa6";

export default function App() {
  const [formData, setFormData] = useState({name: "", email:"", message: "" });

  // skills variable
  const skills = [
    { name: "HTML", icon:<FaHtml5 />},
    { name: "CSS", icon:<FaCss3 />},
    { name: "JavaScript", icon:<FaJs/>},
    { name: "C", icon:<FaC/>},
    { name: "Java", icon:<FaJava/>},
    { name: "React.js", icon: <FaReact />},
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Django", icon: <FaPython /> },
    { name: "SQL", icon: <FaDatabase />},
    { name: "AWS", icon: <FaAws />}
  ]

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
          <b>Full-Stack Software Developer</b> | React | Node.js | Django
        </motion.p>
        <img width={320} src={ require ("./images/IMG-20230105-WA0019.jpg") } alt="Ayodele" />
      </motion.section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {["Project 1", "Project 2"].map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{project}</h3>
              <p>Brief description of the project.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill.icon} {skill.name}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.05 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.05 }}
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
          >Send Message</motion.button>
        </motion.form>
      </section>
    </div>
  )
}
