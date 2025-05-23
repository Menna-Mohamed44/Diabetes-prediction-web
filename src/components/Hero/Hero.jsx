import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Diabetes Prediction Using Machine Learning</h1>
            <p>
              Our advanced AI model helps predict diabetes risk based on your health metrics.
              Early detection can lead to better management and improved health outcomes.
            </p>
            <div className={styles.heroCta}>
              <Link to="/prediction" className={styles.primaryBtn}>
                Try Prediction
              </Link>
              <a href="#about" className={styles.secondaryBtn}>
                Learn More
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/images/hero-image.svg" alt="Diabetes Prediction Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;