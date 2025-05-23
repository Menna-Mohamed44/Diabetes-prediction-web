import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      
      <section className={styles.about} id="about">
        <div className="container">
          <h2 className={styles.sectionTitle}>About Our Diabetes Prediction Model</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                Our diabetes prediction model uses Support Vector Machine (SVM) algorithm to analyze various health metrics and predict the likelihood of diabetes. The model has been trained on the Pima Indians Diabetes Database, which includes data from 768 individuals.
              </p>
              <p>
                The model takes into account several factors including:
              </p>
              <ul className={styles.featureList}>
                <li>Number of pregnancies</li>
                <li>Glucose concentration</li>
                <li>Blood pressure</li>
                <li>Skin thickness</li>
                <li>Insulin level</li>
                <li>Body Mass Index (BMI)</li>
                <li>Diabetes pedigree function</li>
                <li>Age</li>
              </ul>
              <p>
                With an accuracy of approximately 78% on test data, our model provides a reliable initial screening tool for diabetes risk assessment.
              </p>
              <div className={styles.ctaButton}>
                <Link to="/prediction" className={styles.primaryBtn}>
                  Try the Prediction Tool
                </Link>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <img src="/images/diabetes-chart.svg" alt="Diabetes Statistics Chart" />
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3>Advanced Algorithm</h3>
              <p>Utilizes Support Vector Machine (SVM) algorithm for accurate predictions based on multiple health factors.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Privacy Focused</h3>
              <p>Your health data is processed securely and never stored on our servers after prediction.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Instant Results</h3>
              <p>Get your diabetes risk prediction instantly after submitting your health metrics.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </div>
              <h3>Research Backed</h3>
              <p>Based on established medical research and trained on the Pima Indians Diabetes Database.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;