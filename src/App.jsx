import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Prediction from './pages/Prediction/Prediction';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navigation />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prediction" element={<Prediction />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <div className="container">
            <p>© 2025 Diabetes Prediction App. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;