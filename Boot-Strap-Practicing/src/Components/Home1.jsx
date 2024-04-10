import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
function Home1() {

  return (
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Initial properties for the first animation
      animate={{ opacity: 1, x: 0 }}    // Animate properties for the first animation
      exit={{ opacity: 0, x: -100 }}     // Exit properties for the first animation
      transition={{ duration: 0.5 }}     // Transition duration for the first animation
    >
      Content 1
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -100 }} // Initial properties for the second animation
      animate={{ opacity: 1, x: 0 }}    // Animate properties for the second animation
      exit={{ opacity: 0, x: -100 }}     // Exit properties for the second animation
      transition={{ duration: 0.5 }}     // Transition duration for the second animation
    >
      Content 2
    </motion.div>

    {/* Add more motion components for additional animations */}
  </AnimatePresence>
  );
}

export default Home1;
