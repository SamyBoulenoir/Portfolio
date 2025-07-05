import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import About from './Components/About/About.jsx';
import Education from './Components/Education/Education.jsx';
import Projects from './Components/Projects/Projects.jsx';
import PaginationDots from './Components/PaginationDots/PaginationDits.jsx';
import ScrollManager from './Components/ScrollManager/ScrollManager.jsx';
import Skill from './Components/Skill/Skill.jsx';
import './App.css';

const sections = [
  { id: 'about', label: 'À propos', Component: About },
  { id: 'education', label: 'Parcours', Component: Education },
  { id: 'projects', label: 'Projets', Component: Projects },
  { id: 'skill', label: 'Skill', Component: Skill}
];

export default function App() {
  const [[currentIndex, direction], setIndexAndDirection] = useState([0, 0]);

  const handleChangeIndex = (newIndex) => {
    if (newIndex === currentIndex) return;
    const dir = newIndex > currentIndex ? 1 : -1;
    setIndexAndDirection([newIndex, dir]);
  };

  const { id, Component } = sections[currentIndex];

  return (
    <>
      <div className="single-section">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.section
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="motion-wrapper"
          >
            <Component />
          </motion.section>
        </AnimatePresence>
      </div>

      <PaginationDots
        sections={sections}
        currentIndex={currentIndex}
        onSelect={handleChangeIndex}
      />
      <ScrollManager
        sectionIds={sections.map((s) => s.id)}
        currentIndex={currentIndex}
        setCurrentIndex={handleChangeIndex}
      />
    </>
  );
}
