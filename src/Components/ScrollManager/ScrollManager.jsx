import { useEffect, useRef } from 'react';

export default function ScrollManager({ sectionIds, currentIndex, setCurrentIndex }) {
  const isScrolling = useRef(false);
  const touchStartY = useRef(null);

  const scrollToSection = (index) => {
    const section = document.getElementById(sectionIds[index]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentIndex(index);
      isScrolling.current = true;

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    }
  };

  const handleWheel = (e) => {
    if (isScrolling.current) return;

    if (e.deltaY > 30 && currentIndex < sectionIds.length - 1) {
      scrollToSection(currentIndex + 1);
    } else if (e.deltaY < -30 && currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isScrolling.current || touchStartY.current === null) return;

    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    if (deltaY > 50 && currentIndex < sectionIds.length - 1) {
      scrollToSection(currentIndex + 1);
    } else if (deltaY < -50 && currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    }

    touchStartY.current = null;
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, sectionIds]);

  return null;
}
