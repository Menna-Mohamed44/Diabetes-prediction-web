import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo}>
            DiabetesPredict
          </Link>
          
          <div className={styles.menuButton} onClick={toggleMenu}>
            <div className={styles.menuIcon}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/prediction" onClick={() => setIsMenuOpen(false)}>Prediction</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;