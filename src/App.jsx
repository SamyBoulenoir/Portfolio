import React, { useState } from 'react';
import About from './Components/About/About.jsx';
import Education from './Components/Education/Education.jsx';
import Projects from './Components/Projects/Projects.jsx';
import FloatingMenu from './Components/FloatingMenu/FloatingMenu.jsx';
import ScrollManager from './Components/ScrollManager/ScrollManager.jsx';
import './App.css';

const sections = [
  { id: 'about', label: 'À propos', Component: About },
  { id: 'education', label: 'Parcours', Component: Education },
  { id: 'projects', label: 'Projets', Component: Projects },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {sections.map(({ id, Component }) => (
        <section id={id} key={id}>
          <Component />
        </section>
      ))}

      <FloatingMenu
        sections={sections}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <ScrollManager
        sectionIds={sections.map(s => s.id)}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
