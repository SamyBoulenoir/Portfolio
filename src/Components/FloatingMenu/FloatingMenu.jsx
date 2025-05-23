import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingMenu.css';

const baseAngle = (3 * Math.PI) / 4.5;

const variants = {
  open: (i) => ({
    x: 80 * Math.cos(baseAngle + i * 0.7),
    y: 80 * Math.sin(baseAngle + i * 0.7),
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 500, damping: 30, delay: i * 0.05 },
  }),
  closed: {
    x: 0,
    y: 0,
    opacity: 0,
    scale: 0,
    transition: { type: 'spring', stiffness: 500, damping: 30 },
  },
};

export default function FloatingMenu({ sections, currentIndex, setCurrentIndex }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((o) => !o);

  const handleClick = (id, index) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setCurrentIndex(index);
    setIsOpen(false);
  };

  return (
    <div className="floating-menu-container">
      <button
        onClick={toggleMenu}
        aria-label="Menu"
        className="floating-menu-main-btn"
      >
        ☰
      </button>

      <AnimatePresence>
        {isOpen &&
          sections.map(({ id, label }, i) => (
            <motion.button
              key={id}
              custom={i + 1}
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              className={`btn btn-secondary floating-menu-sub-btn ${
                currentIndex === i ? 'active' : ''
              }`}
              onClick={() => handleClick(id, i)}
              title={label}
            >
              {label[0]}
            </motion.button>
          ))}
      </AnimatePresence>
    </div>
  );
}
