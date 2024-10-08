import React, { useState } from 'react';
import './responsive.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import Certificates from './components/Certificates';


function App() {
  const [activeSection, setActiveSection] = useState('home'); // Manage active section

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      case 'education':
        return <Education />
      case 'certificates':
        return <Certificates />
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} /> {/* Pass function to Header */}
      <main>
        {renderSection()} {/* Render section based on state */}
      </main>
      <Contact />
    </div>
  );
}

export default App;
