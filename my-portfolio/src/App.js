import React, { useState } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import { ThemeProviderComponent, theme } from './components/Theme';

function App() {
  const [activePage, setActivePage] = useState('About');

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  let content;
  if (activePage === 'About') {
    content = <About />;
  } else if (activePage === 'Portfolio') {
    content = <Portfolio />;
  } else if (activePage === 'Contact') {
    content = <Contact />;
  } else if (activePage === 'Resume') {
    content = <Resume />;
  }

  return (
    <ThemeProviderComponent theme={theme}>
      <div className="App">
        <Header activePage={activePage} handleNavClick={handleNavClick} />
        {content}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </ThemeProviderComponent>
    
  );
}

export default App;
