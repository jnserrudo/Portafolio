// src/App.jsx
import React from 'react';

// Named imports
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;