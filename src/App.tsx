
import React from 'react';
import Header from './components/tsx/Header';
import Background from './components/tsx/Background';
import Home from './Pages/Home';
import './App.css';
import Footer from './components/tsx/Footer';

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;