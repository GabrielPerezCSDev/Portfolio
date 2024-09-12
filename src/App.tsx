
import React from 'react';
import Header from './components/tsx/Header';
import Background from './components/tsx/Background';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Home />

    </div>
  );
}

export default App;