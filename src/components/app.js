import React from 'react';

// Components
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Contact from './contact';
import Footer from './footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
