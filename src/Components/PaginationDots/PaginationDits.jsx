import React from 'react';
import './PaginationDots.css';

export default function PaginationDots({ sections, currentIndex, onSelect }) {
  return (
    <div className="pagination-dots">
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={`dot ${index === currentIndex ? 'active' : ''}`}
          onClick={() => onSelect(index)}
          aria-label={`Aller à ${section.label}`}
        />
      ))}
    </div>
  );
}
