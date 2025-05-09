import { motion } from 'framer-motion';
import { useState } from 'react';
import './style/Main.css';

export default function Main() {
  const [hoverSide, setHoverSide] = useState(null);

  const handleMouseMove = (e) => {
    const width = window.innerWidth;
    const mouseX = e.clientX;
    setHoverSide(mouseX < width / 2 ? 'left' : 'right');
  };

  const handleMouseLeave = () => {
    setHoverSide(null); // Reset to default 50-50 view
  };

  return (
    <div className="IntroContainer" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div
        className="left"
        animate={{
          width: hoverSide === 'left' ? '100%' : hoverSide === 'right' ? '0%' : '50%',
        }}
        transition={{ duration: 2 }}
      >
        <div className="content">
          <h1>Fullstack</h1>
          <p>hello code</p>
        </div>
      </motion.div>

      <motion.div
        className="right"
        animate={{
          width: hoverSide === 'right' ? '100%' : hoverSide === 'left' ? '0%' : '50%',
        }}
        transition={{ duration: 2 }}
      >
        <div className="content">
          <h1>AIML</h1>
          <p>hello code</p>
        </div>
      </motion.div>
    </div>
  );
}
