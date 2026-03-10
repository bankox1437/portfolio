import React, { useState, useEffect } from 'react'
import '../styles/Header.css'

function Header() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = ['about', 'project', 'skills', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detect when section is in the middle of the screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-links">
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#project" className={activeSection === 'project' ? 'active' : ''}>Projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Header