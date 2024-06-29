import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import FeedbackForm from './pages/FeedbackForm';  // Import the FeedbackForm component
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<FormPage />} />
          <Route path="/feedback" element={<FeedbackForm />} />  
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
