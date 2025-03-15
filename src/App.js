import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';         
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
        <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        <Footer /> 
    </Router>
  );
}

export default App;

