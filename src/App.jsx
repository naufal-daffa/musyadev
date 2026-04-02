import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'projects' && <Projects />}
            {activeTab === 'resume' && <Resume />}
            {activeTab === 'contact' && <Contact />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;