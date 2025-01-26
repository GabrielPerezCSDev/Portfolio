
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/tsx/Header';
import Background from './components/tsx/Background';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Project/Projects';
import Contact from './Pages/Contact';
import './App.css';
import Footer from './components/tsx/Footer';
import ProjectDetail from './Pages/Project';
import Checkers from './Pages/Checkers';

function App() {
  return (
    <Router>
    <div className="App">
      <Background />
      <Header />
      <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
          <Route path="/Portfolio/projects/:slug" element={<ProjectDetail />} />
          <Route path="/Portfolio/contact" element={<Contact />} />
          <Route path="/Portfolio/checkers" element={<Checkers />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;