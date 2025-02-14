import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 4}}>
      <h1>Welcome to My Portfolio</h1>
    </motion.div>
  )
}
export default App;
