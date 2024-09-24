
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/tsx/Header';
import Background from './components/tsx/Background';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './App.css';
import Footer from './components/tsx/Footer';

function App() {
  return (
    <Router basename ="/">
    <div className="App">
      <Background />
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;